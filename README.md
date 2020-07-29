# Alternative-collision-script-for-domgame.js
An alternative collision script to the built-in one in <a href="https://github.com/yikuansun/domgame.js">domgame.js</a>

# Pros and cons
<h2>Pros</h2>
<li>More precise</li>
<li>More consistantly accurate</li>
<h2>Cons</h2>
<li>Can only detect collisions between two gamepieces <i>in the same gamescreen element</i></li>
<li>Does not take margin, padding, or border into account (you'll have to use hitboxes for those)</li>

# Usage
Be sure to put the script tag for this library <i>after</i> that of domgame.js, but before the main scripts, as shown:
<pre><script src="domgame.js"></script>
<script src="domgamecollision.js"></script>
<script src="main.js"></script></pre>
Install by downloading the repository.
