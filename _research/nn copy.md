---
layout: research
title: "Layered Abstraction Technique for Effective Formal Verification of Deep Neural Networks"
bt: "Layered Abstraction Technique"
st: "for Effective Formal<br>Verification of Deep Neural Networks"
authors: Jueun Yeon, Seunghyun Chae, Kyungmin Bae
comments: International Conference on Computer-Aided Verification, CAV 2024
img-url: "nn-panda.png"
date: 2022-12-23
---   

<div class="row" id="author-row" style="margin: 0px auto; max-width: 628px;">
      <div class="col-md-12 text-center" style="display: table; margin:0 auto">
          <table class="author-table" id="author-table">
              <tbody><tr>
                  <td>
                      <a style="text-decoration:none" href="https://scholar.harvard.edu/dorverbin/home">
                        Jueun Yeon
                      </a>
                      <br>POSTECH
                  </td>
                  <td>
                      <a style="text-decoration:none" href="https://phogzone.com/">
                        Seunghyun Chae
                      </a>
                      <br>POSTECH
                  </td>
                  <td>
                      <a style="text-decoration:none" href="http://bmild.github.io/">
                       Kyungmin Bae
                      </a>
                      <br>POSTECH
                  </td>
              </tr>
          </tbody></table>
      </div>
</div>



<div class="row">
  <div class="col-sm-6 col-sm-offset-3 text-center">
      <ul class="nav nav-pills nav-justified material">
          <li>
              <a href="https://arxiv.org/abs/2112.03907">
              <img src="{{site.baseurl}}/images/research/paper_image.jpg" >
                  <h4><strong>Paper</strong></h4>
              </a>
          </li>
          <li>
              <a href="https://youtu.be/qrdRH9irAlk">
              <img src="{{site.baseurl}}/images/research/youtube_icon.png" >
                  <h4><strong>Video</strong></h4>
              </a>
          </li>
          <li>
              <a href="https://storage.googleapis.com/gresearch/refraw360/ref.zip" target="_blank">
              <img src="{{site.baseurl}}/images/research/database_icon.png" >
                  <h4><strong>Experiment Dataset</strong></h4>
              </a>
          </li>
          <li>
              <a href="https://github.com/google-research/multinerf" target="_blank">
              <img src="{{site.baseurl}}/images/research/github.png" >
                  <h4><strong>Code</strong></h4>
              </a>
          </li>
      </ul>
  </div>
</div>



### Abstract
{: .rpost-subject}

Deep learning has performed well in many areas. However, deep learning is vulnerable to errors such as adversarial examples. Therefore, much research exists on ensuring the safety and robustness of deep neural networks. Since deep neural networks are large in scale and the activation functions are non-linear, linear approximation methods for such activation functions are proposed and widely used for verification. In this research, we propose a new technique, called layered abstraction, for non-linear activation functions, such as ReLU and Tanh, and the verification algorithm based on that. We have implemented our method by extending the existing SMT-based methods. The experimental evaluation showed that our tool performs better than an existing tool.
{: .text-justify}

---

### Main Problem
{: .rpost-subject}

<div class="text-center" style="margin: auto;">
  <img src="{{site.baseurl}}/images/respic/nn-dnn.png" width="50%" alt="overview of the architecture">
</div>

A major factor in neural network verification is the presence of activation functions like ReLU(Rectified Linear Unit), Sigmoid, and Tanh that provides non-linearity to the DNN, with such non-linear nature making the problem NP-hard. One such solution to this is linear approximation (i.e. abstraction), which simplifies the verification problem, making the problem more manageable for large-scale neural networks. Various abstraction techniques has been proposed, each with their own trade-offs between precision and performance with
  - Increasing performance, leading to shorter verification time but increases the possibilities of spurious counterexamples (false positives)
  - Increasing precision, leading to less wrong answers but increases the computation cost.
  
---
### Contributions

<div class="text-center">
  <img src="{{site.baseurl}}/images/respic/nn-abstraction.png" width="65%" alt="layered abstraction technique for Sigmoid">
</div>

To mitigate above trade-offs, we propose a new abstraction technique called layered abstraction technique. The hierarchical technique provides a tiers (i.e. levels) of abstractions each with different degrees of precision and performance.
  1. Level 1: highest precision & lowest performance
  2. Level 2: mid precision & mid performance
  3. Level 3: lowest performance & highest precision

Then during the verification process, we apply the abstraction with the highest level first, and gradually apply lower levels of abstraction every time a spurious counterexample is encounted.
{: .text-justify}

---

### Experimental results
{: .rpost-subject}

In this page we will show two experimental results to demonstrate the capabilities of our approach. One, by comparing our approach against Reluplex on verifying AcasXu neural networks in terms of verification time. And, two by verifying AcasXu neural networks with Tanh activation functions, previously unverifiable.
{: .text-justify}

##### 1. Properties Verified

<div class="text-center">
  <img src="{{site.baseurl}}/images/respic/nn-prop.png" width="80%" alt="properties verified">
</div>

##### 2. Comparison against Reluplex

<div class="text-center">
  <img src="{{site.baseurl}}/images/respic/nn-expr-relu.png" width="80%" alt="comparison against reluplex">
</div>

##### 3. Verification of Tanh NN

<div class="text-center">
  <img src="{{site.baseurl}}/images/respic/nn-expr-tanh.png" width="80%" alt="verification of tanh nn">
</div>


For more details, refer
1. J. Yeon, S. Chae, and K. Bae, Layered Abstraction Technique for Effective Formal Verification of Deep Neural Networks, Journal of KIISE, Vol. 49, No. 11, Nov 2022 [[paper](https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE11158124)]
2. J. Yeon, S. Chae, and K. Bae, Layered Abstraction for Formally Verifying Deep Neural Networks, Korea Software Congress (KSC), Dec 20-22, 2021 [[paper](https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE11035647)]
{: .text-justify}