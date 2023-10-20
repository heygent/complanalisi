tags:: complprob
alias:: va/discreta, VA Discreta

- Una [[Variabile aleatoria]] discreta è una funzione reale del risultato di un esperimento che può prendere un numero finito o contabilmente infinito di valori.
- ## Probability Mass Function
	- Data una VA discreta $X$, le probabilità dei valori che può assumere sono catturati dalla PMF di $X$, detta $p_X$. In particolare, se $x$ è un possibile valore di $X$, la **massa di probabilità** di $x$, denotata da $p_X(x)$, è la probabilità dell'evento $\{X = x\}$, che consiste di tutti i risultati che conferiscono a $X$ un valore uguale a $x$.
	- $$p_X(x) = P(\{X = x\})$$
	- Sia l'esperimento due lanci indipendenti di una moneta, e sia $X$ il numero di teste ottenuto. Allora la PMF di $X$ è:
	  $$
	  p_X(x) = \begin{cases}
	  \frac{1}{4} & \text{ se } x = 0\text{ oppure }x = 2 \\
	  \frac{1}{2} & \text{ se } x = 1 \\
	  0 & \text{ altrimenti}
	  \end{cases}
	  $$
	- Da notare che:
		- $\sum_x p_X(x) = 1$
		- $P(X \in S) = \sum_{x \in S} p_X(x)$ $\forall S$ sottoinsieme di possibili valori di $X$
		-
