---
layout: researchpage
title: "Reusable Model Checking"
intro: "This research aims at accelerating model checking by learning useful patterns from previous search instances"
img-url: "reusable.svg"
date: 2024-10-01
---

## Introduction
<img src="{{site.baseurl}}/images/respic/reusable.svg" width="100%" style="height:300px;">

Model checking usually takes a very long time until a result is obtained.
Even worse, model checking happens to be quite a repetitive process, much like software development.
It is this heavy repetition of similar search instances each of which is also very heavy, that makes model checking intractable.
However, only little effort has been made to avoid such redundancies from the repetition.
Hence our main goal is to devise a learning based technique that exploits frequent logical patterns within a group of similar model checking instances to accelerate the search.

Our work is largely inspired by directed model checking approach, where the search for a goal state is prioritized by a carefully crafted heuristic function.
An obvious limitation to this approach is on how to come up with a decent heuristic function; this will again require a heavy repetition of trial-and-error, even equipped with domain knowledge of humans, due to an often large parameter space.
This is where learning can play its role: automatically design a heuristics by observing the data!


## Approach
### Term Rewriting
### Reinforcement Learning

## Challenge
### Extension to temporal logic
For the simplest case of reachability goals, designing an admissible reward function for the goal over the transitions is immediate: e.g. give reward 1 for goal states and 0 otherwise. This is because whether the reachability goal is achieved can be detected by looking at the recent state. In other words, this kind of goal is Markovian. But how can one encode e.g. an LTL properties into a reward function on an MDP?


## References

The following paper explains approximation methods for logical model checking:

*   [Abstract Logical Model Checking of Infinite-State Systems Using Narrowing](http://dx.doi.org/10.4230/LIPIcs.RTA.2013.81), Kyungmin Bae, Santiago Escobar, José Meseguer, RTA'13, 2013

The narrowing-based symbolic model checking method is introduced in:

*   [Symbolic Model Checking of Infinite-State Systems Using Narrowing](http://dl.acm.org/citation.cfm?id=1779795), Santiago Escobar, José Meseguer, RTA'07, 2007


 

## Examples
To be added.

## Contact
Byoungho Son (byhoson at postech dot ac dot kr)

---

## Code
<!-- This will works well in the lab page. -->

{% highlight cpp %}
#include <bits/stdc++.h>
using namespace std;
    int main(){
    vector<int> vec = { 1, 5,   , 9, 6, 7, 3, 4, 2, 0 };

    // Defining the range as whole vector
      auto first = vec.begin();
      auto last = vec.end();
      
      // calling the sort for the above defined range
    sort(first, last);

    for (auto i: vec)
        cout << i << " ";
    return 0;
    }
{% endhighlight %}

---
Last modified: 08/08/2014 02:40:42 (Kyungmin Bae)