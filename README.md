from NGXS - introduction & getting started PART 1

https://www.youtube.com/watch?v=y1gfyEaKPpk

1. Import NgxsModule
2. Create 3 state TS files
3. In model TS - Create state model
4. In actions TS -Create state actions TS where you declare the actions
5. In state TS - Create functions of actions in state TS where you actually define the functions of the declared actions
6. In state TS - create Selector, this acts as the return/output of the state functions
7. In change value component TS - Add @Select decorator and observable - which together observes change in state
8. In change value component TS - Add subscription, that subscribes to the observables.
9. In change value component TS - Add dispatches which communicate changes from the change value component to inform and update the state
10. In change value component HTML - Replace (click) or whatever interaction with a method call and incorporate (ngModelChange) to the input
11. In diplay value TS component - Add @Select decorator w Observable to gain access to changes in state
12. In display value HTML component - Update input value and add async pipe
13. Install Chrome ReduxWebTools Extension...and npm i @ngxs/devtools-plugin
