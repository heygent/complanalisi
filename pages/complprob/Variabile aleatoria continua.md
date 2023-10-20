tags:: complprob
alias:: va/continua, VA Continua

- Le VA continue assumono valori in un intervallo di numeri reali (es. $[0, \infty), [2, 4], \ldots$).
- Se $X$ è una VA continua, la probabilità che essa possa assumere un certo valore è 0, dato che questa può assumere un numero infinito di valori e non è possibile ottenere il totale delle probabilità sommandole.
- ## Probability Density Function
  id:: 63c04602-2397-4496-83b0-8afe13835646
	- Una VA continua è descritta da una funzione di densità di probabilità, che assegna a ogni numero reale $x$ un valore $f_X(x) \ge 0 \quad \forall x \in R$
		- Deve soddisfare la condizione:
			- $$\int_{-\infty}^{\infty} f_X(x)\, dx = 1$$
	- $f_X(x)$ è detta PDF di $X$
- Cumulative Distribution Function
  id:: 63c04756-49d9-45eb-9f27-8661a93b9ee6
	- $$F_X(x) = \int_{-\infty}^\infty f_X(x)\, dx$$
	- $$F_X(x) = P(X \le x)$$
- Variabili aleatorie continue più note:
	- [[Distribuzione Continua Uniforme]]
	- [[Distribuzione Esponenziale]]
	- [[Distribuzione Gamma]]
	- [[Distribuzione Normale]]