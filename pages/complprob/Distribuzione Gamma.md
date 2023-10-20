tags:: complprob, va/continua

- $$X \sim \text{Gamma}(k, \lambda)$$
- # Riepilogo
	- ## Funzione di probabilità
		- $$f_X(x) = 
		  \frac{ke^{-kx}(kx)^\lambda}{\Gamma(k)}
		  $$
		- $$\Gamma(k) = \int_0^\infty e^{-x} x^{k-1} \, dx$$
		- $$\Gamma(k) = (k-1)!$$
	- $k$  intero, al suo variare la distribuzione può variare molto
- Se le VA $Y_i \sim \text{Exp}(\lambda)$ sono indipendenti e identicamente distribuite ([[Distribuzione Esponenziale]]):
	- $$X = \sum_{i=1}^k Y_i \sim \text{Gamma}(k, \lambda)$$
- ((63c18082-07a5-440b-a083-47194dbb285f))
-