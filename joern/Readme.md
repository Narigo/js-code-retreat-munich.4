# JSCR4-Munich

Some general feedback about the sessions:  The internet connection wasn't very good at times, but pairing next to each 
other and still using Teamviewer for it was really cool. You can use your own keyboard and monitor to follow the work 
without having to sit on each others lap. The "make font size bigger" feature in IntelliJ works very well, too. :)

## 1st session: Pairing with Jesús

See [`Board1Spec.js`](Board1Spec.js) for code.

Jesús showed me the setup of the last time. It was a real pleasure to see how quickly you can get up and running, if 
you have time constraints. :)

We had a close look at the GoL-sheet and tried to just write tests for each of the rules described there. Just like the 
board on the paper, we tried to show it in our code. You can see the initial board in each of the tests as a two 
dimensional array, which was really nice to use. Someone else mentioned they tried to visualize the board directly, I 
guess that's just how we have done it in the end by using very simple formatting of our code. 

In the end, we didn't get all tests on green yet, but it was a really nice session to get up, running and prepared for 
the next session.

## 2nd session: Ping-pong with Matt

See [`Board2Spec.js`](Board2Spec.js) for code.

Matt started with the test-code right away. He wanted to introduce an object for the Board in his tests right away. When 
I've told him that we used only a simple function in our first session he quickly moved away from the object and wrote 
a function. In the end, I would have liked to see how using an object would result in a completely different style.

He wanted to start the tests really small by using the smallest sizes of the board right away. As he always expected 
the whole board as a test result, I had to return that new board somehow. We figured out that when we reached 2x2 with 
this approach, there was a point where I couldn't fake the implementation anymore by using the simple inputs I got. It 
became clear that in order to get the tests run, I either had to implement all the rules plus check out all the sizes, 
which would have been quite overwhelming. So I resorted to mapping inputs to outputs, which worked until the time ran 
out.

What I've seen here was a real end-to-end test. It's hard to implement that easily, if you're not only looking at one 
single rule.

## 3rd session: Limit ourselves with Marius

See [`Board3Spec.js`](Board3Spec.js) for code.

I guess Marius was the most advanced JS programmer I've paired with. It was really cool that we could think of 
solutions for the limitations very fast and we both understood how to use them.

As you've seen if you read my first two sessions, I've been using the same, more visual approach about the inputs and 
outputs. Marius had a different idea: Use two functions, one to check whether a cell is alive and another one to get 
the number of neighbor-cells. We switched to his approach when the time already went late, so we didn't get very far.

When thinking about the limitations in retrospective, I could see some functional patterns emerge. I think if you would 
try to limit yourself to all the ones except `return`, you could practice functional programming quite nice. The big 
problem with "no `return`" is that you're essentially forced to use mutable state. Thinking about it now that I wrote 
it: Maybe using promises would help here.

## 4th session: Mute ping-pong

In the beginning we talked about the problem, tried to use limitations but don't enforce it. We used Marius' approach 
and tried to get to the visual "end-to-end" test in the end. It clearly didn't work out. I saw that I made a few 
mistakes that couldn't show my real intention for how doing what. Sorry for that and I guess it was a bit demotivating. 

Not talking and coding on the same files results in not working... Lesson learned: Talk frequently and see whether you 
are still in sync with your team.

## 5th session: TDD for managers with Sabah

See [Google 
Spreadsheet](https://docs.google.com/spreadsheets/d/1lZQy4tTe1UXIPR8lsNnqrxbzM-xQfDoZf9vWLOIGx0E/edit?usp=sharing) for 
code.

It took us some time to understand how the Google Scripts work. They give you two dimensional arrays, if you select a 
range, which is actually totally cool and nice, but we didn't really find it quickly enough in a documentation. Anyways 
Wolfram showed us pretty cool tricks in his kick-off presentation, so we loved to see the red and green lights just by 
using conditional formatting. We haven't finished page 2, where we wanted to test not only the middle result but the 
whole board.

## Bonus spreadsheet

When I finally came home, I wanted to do something more sophisticated, so I came up with this:
https://docs.google.com/spreadsheets/d/1NVxp0rOLjWqqVDCAqzXZ7tWbSiR1dDui_Qqmk_230nE/edit#gid=0

It uses 0 and 1 characters to fill the board and conditional formatting to show them as white or black blocks. It's 
nice to see that copy & paste of the states is a fun way to "see animations".
