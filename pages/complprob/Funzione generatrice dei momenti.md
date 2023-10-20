tags:: complprob

- https://www.youtube.com/watch?v=dVRWBmykncQ
- $\phi_X(t) = \mathbb{E}[e^{tX}] =$ #card
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.6
  card-next-schedule:: 2023-02-08T23:00:00.000Z
  card-last-reviewed:: 2023-02-07T23:04:04.680Z
  card-last-score:: 1
	- [[VA Discreta]]:
		- $$\sum_k e^{tk} p_X(k)$$
	- [[VA Continua]]:
		- $$\int_{\mathbb{R}} e^{tx} f_X(x)\,dx$$
	- Il $k$-esimo momento corrisponde a $\mathbb{E}[X^k]$
	- Osservazioni:
		- La funzione generatrice di una somma di VA indipendenti è il prodotto delle funzioni generatrici degli addenti
		- $$\begin{aligned}
		  \left.\frac{d}{dt} \phi_x (t) \right|_{t=0} &= \int_\mathbb{R} x f_X(x)\,dx = \mathbb{E}[X] \\
		  \left.\frac{d^n}{dt^n} \phi_x (t) \right|_{t=0} &=  \mathbb{E}[X^n]
		  \end{aligned}$$
			- La derivata $n$-esima è il momento $n$-esimo
- ## Trasformata di Laplace
	- $$\psi_X(t) = \mathbb{E}[e^{-tx}]$$
- ## Funzione caratteristica
  id:: 63c408be-9f67-46c9-b11a-a5b7ecfd3b4c
	- $$\phi_X(t) = \mathbb{E}[e^{itx}]$$