---
layout: research
title: "Modeling and formal analysis of virtually synchronous cyber-physical systems in AADL"
authors: Jaehun Lee, Kyungmin Bae, Peter Csaba Ölveczky, Sharon Kim, Minseok Kang
img-url: "aadl-tool-interface.png"
date: 2022-09-03
---

### Abstract

{: .rpost-subject}

This paper presents the HybridSynchAADL modeling language and formal analysis tool for virtually synchronous cyber-physical systems with complex control programs, continuous behaviors, and bounded clock skews, network delays, and execution times. We leverage the Hybrid PALS methodology, so that it is sufficient to model and verify the much simpler underlying synchronous designs. We define the HybridSynchAADL language as a sublanguage of the avionics modeling standard AADL for modeling such synchronous designs in AADL. We define the formal semantics of HybridSynchAADL using Maude with SMT solving, which allows us to represent advanced control programs and communication features in Maude, while capturing timing uncertainties and continuous behaviors symbolically with SMT solving. We have developed new general methods for optimizing the performance of such symbolic rewriting, which makes the analysis of HybridSynchAADL models feasible. We have integrated the formal modeling and analysis of HybridSynchAADL models into the OSATE tool environment for AADL. Finally, we demonstrate the effectiveness of the Hybrid PALS methodology and HybridSynchAADL on a number of applications, including autonomous drones that collaborate to achieve common goals, and compare the performance of our tool with other state-of-the-art formal tools for hybrid systems.
{: .text-justify}

---

### Overall architecture

{: .rpost-subject}

<div class="text-center" >
  <img src="{{site.baseurl}}/images/respic/aadl-arch.jpg" width="80%" alt="overview of the architecture" >
</div>

We develop HybridSynchAADL tool for modeling and formally verifying virtually synchronous CPSs. HybridSynchAADL contains a modeling language and formal analysis tool for virtually synchronous cyber-physical systems with complex control programs, continuous behaviors, and bounded clock skews, network delays, and execution times. HybridSynchAADL leverages the Hybrid PALS equivalence, so that it is sufficient to model and verify the simpler underlying synchronous designs. HybridSynchAADL models are given a formal semantics and analyzed using Maude with SMT solving, which allows users to represent advanced control programs and communication features in Maude, while capturing timing uncertainties and continuous behaviors symbolically with SMT solving.
{: .text-justify}

<div class="text-center">
  <img src="{{site.baseurl}}/images/respic/aadl-tool-interface.png" width="80%" alt="tool interface">
</div>

---

### Experimental results

{: .rpost-subject}

We compare our symbolic reachability analysis method with four reachability analysis tools for hybrid automata: HyComp, SpaceEx, FlowStar, and dReach. For these tools, we have “encoded” the synchronous designs of the HybridSynchAADL models as networks of hybrid automata. Each (drone, water tank, and thermostat) component is modeled as a hybrid automaton with three modes, where the behavior of a controller is encoded as a single transition.

##### Result of Comparing with other tools

<div class="text-center">
  <img src="{{site.baseurl}}/images/respic/aadl-expr.png" width="70%" alt="experimental result">
</div>

The experimental results are summarized in Table 1, as execution times (seconds) over time bounds ( B · 100 ms), where N denotes the number of components. The results for double-integrator dynamics do not include HyComp, which does not support nonlinear polynomial dynamics. For Inv⊤, Table 1 shows the largest time bound for which the tool could prove the absence of counterexamples. Often, tools timed out when trying to verify that Inv⊤ holds up to time bound 500. For Inv⊥, the table shows the smallest bound for which the tool found counterexamples.
As shown in Table 1, HybridSynchAADL outperforms the other tools in most cases, in particular for complex mod- els with larger N. Consider “Rend (single)” (rendezvous with single-integrator dynamics) with N = 4. For Inv⊤, HybridSynchAADL needs 24.6 seconds for B = 5, whereas SpaceEx needs 401.5 seconds for B = 1 and timed out for B > 1. For Inv⊥, HybridSynchAADL found a counterex- ample at B = 4 in 21.5 seconds, whereas all other tools timed out. It is worth noting that FlowStar occasionally found (spurious) counterexamples at smaller bounds, because of over-approximation by the Taylor model flowpipe construc- tion
{: .text-justify}
