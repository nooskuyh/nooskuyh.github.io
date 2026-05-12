const card = document.querySelector(".card");
const dragHandle = document.querySelector(".card__rotator");

let pointerX = 0;
let pointerY = 0;
let smoothX = 0;
let smoothY = 0;
let translateX = readPixelVar("--translate-x");
let translateY = readPixelVar("--translate-y");
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let dragStartTranslateX = 0;
let dragStartTranslateY = 0;

function readPixelVar(name) {
  const value = getComputedStyle(card).getPropertyValue(name);
  return Number.parseFloat(value) || 0;
}

function setTranslate(x, y) {
  translateX = x;
  translateY = y;
  card.style.setProperty("--translate-x", `${translateX}px`);
  card.style.setProperty("--translate-y", `${translateY}px`);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getCardGeometry() {
  const rect = card.getBoundingClientRect();

  return {
    rect,
    centerX: rect.left + rect.width / 2,
    centerY: rect.top + rect.height / 2,
  };
}

function updatePointer(clientX, clientY) {
  pointerX = clientX;
  pointerY = clientY;
}

function startDrag(event) {
  isDragging = true;
  dragStartX = event.clientX;
  dragStartY = event.clientY;
  dragStartTranslateX = translateX;
  dragStartTranslateY = translateY;
  card.classList.add("active", "interacting");
  dragHandle.setPointerCapture(event.pointerId);
  updatePointer(event.clientX, event.clientY);
  event.preventDefault();
}

function movePointer(event) {
  updatePointer(event.clientX, event.clientY);

  if (!isDragging) {
    return;
  }

  setTranslate(
    dragStartTranslateX + event.clientX - dragStartX,
    dragStartTranslateY + event.clientY - dragStartY
  );
}

function endDrag(event) {
  if (!isDragging) {
    return;
  }

  isDragging = false;
  card.classList.remove("active", "interacting");

  if (dragHandle.hasPointerCapture(event.pointerId)) {
    dragHandle.releasePointerCapture(event.pointerId);
  }
}

function updateCard() {
  smoothX = (smoothX * 9 + pointerX) / 10;
  smoothY = (smoothY * 9 + pointerY) / 10;

  const { rect, centerX, centerY } = getCardGeometry();
  const distance = Math.hypot(pointerX - centerX, pointerY - centerY);
  const distX = (smoothX - centerX) / 150;
  const distY = (smoothY - centerY) / 150;
  const pointerFromCenter = clamp(1 - distance / 1000, 0, 1);

  card.style.setProperty("--rotate-x", `${distX}deg`);
  card.style.setProperty("--rotate-y", `${-distY}deg`);
  card.style.setProperty("--background-x", `${-distX * 2}%`);
  card.style.setProperty("--background-y", `${distY * 2}%`);
  card.style.setProperty(
    "--pointer-x",
    `${((pointerX - rect.left) / rect.width) * 100}%`
  );
  card.style.setProperty(
    "--pointer-y",
    `${((pointerY - rect.top) / rect.height) * 100}%`
  );
  card.style.setProperty("--pointer-from-center", pointerFromCenter);
  card.style.setProperty("--card-opacity", pointerFromCenter);

  requestAnimationFrame(updateCard);
}

const initialGeometry = getCardGeometry();
updatePointer(initialGeometry.centerX, initialGeometry.centerY);
smoothX = pointerX;
smoothY = pointerY;
setTranslate(translateX, translateY);

window.addEventListener("pointermove", movePointer);
dragHandle.addEventListener("pointerdown", startDrag);
dragHandle.addEventListener("pointerup", endDrag);
dragHandle.addEventListener("pointercancel", endDrag);
dragHandle.addEventListener("lostpointercapture", endDrag);
dragHandle.addEventListener("dragstart", (event) => event.preventDefault());

requestAnimationFrame(updateCard);
