---
layout: research
title: "Straton PLC ST Verification Tool"
authors: Jaeseo Lee, Sangki Kim, Kyungmin Bae
img-url: "plc-arch.png"
date: 2022-12-17
---   

### Abstract
{: .rpost-subject}

The PLC ST verification tool automatically checks whether Straton PLC ST programs satisfy given requirements. The theoretical base of our tool is Rewriting Modulo SMT. 
Given a Straton PLC ST project and system requirements, our tool generates a Maude verification model and performs symbolic reachability analysis to ensure that the model satisfies the requirement for all possible input. The PLC ST verification tool supports the LTL formula. Considering users who do not have enough knowledge about the LTL formula, requirements are written in simplified LTL formula. The PLC ST verification tool can efficiently verify industrial-sized PLC software that has a huge input size. We will show that the PLC ST verification tool can verify a plc software with more than 10 billion input sizes. Additionally, the PLC ST verification tool will offer counterexamples toward requirements that are not satisfied. We believe that our tool can reduce the cost of developing plc software and increase the reliability of plc software.
{: .text-justify}

---

### Overall architecture
{: .rpost-subject}

![overview of the architecture]({{site.baseurl}}/images/respic/plc-arch.png)
{: .text-center}

Our tool has Straton PLC Project and Testcase Specification as input. The target of our tool is Straton PLC. So users need to give Straton PLC Project directory as an input project. Testcase Specification is written in a text file. The test case specification should contain input, maximum step, and condition required to be satisfied within the given step. Our tool will compile two inputs and then run verification automatically. Our tool uses Maude-SMT as a verification engine.
{: .text-justify}

```
fmod RTCL-TYPES is
  sort RType .
  ops RInt RReal RBool RString RList : -> RType [ctor] .
endfm

fmod RTCL-GENERIC-EXP is
  inc RTCL-IDS .
  inc RTCL-TYPES .
  inc BASE-SYNTACTIC-VALUE .
  sort RExp .
  subsort RVarId RValue < RExp .
endfm

view RExp from TRIV to RTCL-GENERIC-EXP is
 sort Elt to RExp .
endv

fmod RTCL-EXP-LIST is
  including LIST{RExp} * (op __ to _`,_, op nil to nilRExpList) .
  sorts NeList{RValue} List{RValue} .
  subsort RValue < NeList{RValue} < List{RValue} .
  subsort NeList{RValue} < NeList{RExp} .
  subsort List{RValue} < List{RExp} .
  op nilRExpList : -> List{RValue} [ctor ditto] .
  op _,_ : List{RValue} List{RValue} -> List{RValue} [ctor ditto] .
  op _,_ : NeList{RValue} List{RValue} -> NeList{RValue} [ctor ditto] .
  op _,_ : List{RValue} NeList{RValue} -> NeList{RValue} [ctor ditto] .
endfm

fmod RTCL-EXP is
  including RTCL-EXP-LIST .
  --- lists
  op _::_ : RExp RExp -> RExp [ctor prec 17 gather(e E)] .
  op _[_] : RExp RExp -> RExp [ctor prec 18] .
  --- arith ops
  ops _+_ _-_ : RExp RExp -> RExp [ctor prec 20 gather(E e)] .
  ops _*_ _/_ _%_ : RExp RExp -> RExp [ctor prec 21 gather(E e)] .
  op -_ : RExp -> RExp [ctor prec 19] .
  --- relational ops
  ops _<_ _<=_ _>_ _>=_ _===_ _!=_ : RExp RExp -> RExp [ctor prec 22 gather(E e)] .
  --- logical ops
  ops _and_ _or_ : RExp RExp -> RExp [ctor prec 24 gather(E e)] .
  op not_ : RExp -> RExp [ctor prec 23] .
  --- function app
  op _(_) : RVarId List{RExp} -> RExp [ctor prec 16] .
  op _() : RVarId -> RExp [prec 16] .
  op if_then_else_fi : RExp RExp RExp -> RExp [ctor prec 15] .
  eq FUNNAME:RVarId () = FUNNAME:RVarId (nilRExpList) .
endfm

fmod RTCL-STATEMENT is
  including RTCL-EXP .
  including RTCL-TYPES .
  sort RStmt .
  op skip : -> RStmt [ctor] .                       --- skip
  op _;_ : RStmt RStmt -> RStmt [ctor assoc prec 68] .  --- sequence
  op __ : RType RVarId -> RStmt [ctor prec 60] .    --- variable decl
  op _:=_ : RVarId RExp -> RStmt [ctor prec 60] .   --- assignment
  op call_ : RExp -> RStmt [ctor prec 60] .
  op return_ : RExp -> RStmt [ctor prec 60] .        --- return
  op if_then{_}else{_} : RExp RStmt RStmt -> RStmt [ctor] . --- conditional
  op while_{_} : RExp RStmt -> RStmt [ctor] .               --- loop
endfm

fmod RTCL-TIME-BLOCK is
  including RTCL-STATEMENT .
  op time(_){_} : RExp RStmt -> RStmt [ctor] .
endfm

fmod RTCL-FUN-DECL is
  including RTCL-STATEMENT .
  sort RFunDecl .
  op __(_){_} : RType RVarId List{RExp} RStmt -> RFunDecl [ctor] .
  op __(){_} : RType RVarId RStmt -> RFunDecl .
  eq RT:RType RV:RVarId () { RS:RStmt } = RT:RType RV:RVarId ( nilRExpList ) { RS:RStmt } .
endfm
```

---

### Experimental results
{: .rpost-subject}

We will show two case studies to show that our tool is efficient and scalable. One is Monitoring Analog, abbreviated as MA, for monitoring analog variables, unit transformation, producing events, etc. MA contains one main program and seven User Defined Function Blocks. MA has 2100 lines. The other is the Power Management System, abbreviated as PMS, for simulating sub-systems of real PMS and sending updated information. PMS has eight main programs and 11 User Defined Function Blocks. PMS has 2700 lines. 
{: .text-justify}


##### 1. Result of MA
           
![result of ma]({{site.baseurl}}/images/respic/plc-expr-ma.png)
{: .text-center}

##### 2. Result of PMS
           
![result of ma]({{site.baseurl}}/images/respic/plc-expr-pms.png)
{: .text-center}

From results, we can show that our tool can finish verifying over input cases with more than 10 billion input status size in a reasonable time. At the same time, providing counterexamples can help to reduce test costs and improve test reliability.
{: .text-justify}

