tags:: complprob, va/continua
wikipedia:: https://it.wikipedia.org/wiki/Distribuzione_esponenziale

- # Riepilogo #card
  card-last-interval:: 8.32
  card-repeats:: 3
  card-ease-factor:: 2.08
  card-next-schedule:: 2023-02-16T04:25:50.963Z
  card-last-reviewed:: 2023-02-07T21:25:50.963Z
  card-last-score:: 3
	- $$X \sim \text{Esponenziale}(\lambda > 0)$$
	- Descrive la durata di un fenomeno che non invecchia.
	- ## Funzione di probabilità
		- $$
		  f(x) = \begin{cases}
		  \lambda e^{-\lambda x} & x \ge 0 \\
		  0 & x < 0
		  \end{cases}
		  $$
	- ## Funzione cumulativa
		- $$P(X > t) = e^{-\lambda t}$$
	- ## Media
		- $$\frac{1}{\lambda}$$
	- ## Varianza
		- $$\frac{1}{\lambda^2}$$
- # Proprietà
	- ## Assenza di memoria #card
	  id:: 63833964-6561-46f6-8dc0-e2d738686ec3
	  card-last-interval:: 4
	  card-repeats:: 2
	  card-ease-factor:: 2.36
	  card-next-schedule:: 2022-02-11T20:07:19.289Z
	  card-last-reviewed:: 2023-02-07T20:07:19.290Z
	  card-last-score:: 3
		- id:: 63e2c1cd-d6b8-456e-a99a-9fe787319a46
		  $$
		  \begin{gathered}
		  P(X > s + t | X > t) = P(X > s) \\
		  \forall s,t \ge 0 
		  \end{gathered}
		  $$
		- Sia $X$ la durata di vita di qualche strumento.
		- La probabilità che $X$ sopravviva per il tempo $s + t$ dato il fatto che è sopravvissuto per $t$ è la stessa che sopravviva per $s$.
			- Ovvero, lo strumento non ricorda di essere stato in uso per il tempo $t$.
			- In alternativa:
				- \begin{aligned}
				  &\phantom{\rightarrow} P(X > s + t | X > t) &=  P(X > s) \\
				  &\rightarrow \frac{P(X > s+t, X > t)}{P(X > t)} &= P(X > s) \\
				  &\rightarrow \frac{P(X > s + t)}{P(X > t)} &= P(X > s) \\
				  &\rightarrow P(X > s + t ) &= P(X > s)P(X > t) \\
				  \end{aligned}
			- È l'unica distribuzione continua che gode di questa proprietà.
				- Nel discreto, l'unica distribuzione che gode di assenza di memoria è la [[Distribuzione Geometrica]]
				  id:: 63c03f33-504a-4aee-b51e-037545fbf5e0
		- ### Dimostrazione
			- \begin{aligned}
			  P(X > s + t) &= e^{-\lambda(s + t)} \\
			  &= e^{-\lambda s} e^{-\lambda t}  \\
			  &= P(X > s) P(X > t)
			  \end{aligned}
	- ## Proprietà di VA esponenziali indipendenti
	  id:: 63c03f33-ee56-4e37-af54-a2ef4014f52e
		- ### Somma di VA esponenziali indipendenti #card
		  id:: 63c443ec-ddaf-43b2-b707-cf70cea0f00e
		  card-last-interval:: 4
		  card-repeats:: 2
		  card-ease-factor:: 2.46
		  card-next-schedule:: 2022-02-11T15:33:10.288Z
		  card-last-reviewed:: 2023-02-07T15:33:10.288Z
		  card-last-score:: 5
			- Siano $X_1, \ldots, X_n$ esponenziali di parametro $\lambda$ indipendenti e identicamente distribuite[^1].
				- $$\sum_{i=1}^n X_i \sim \text{Gamma}(n, \lambda)$$
				-
		- ### Probabilità che una VA esponenziale sia minore di un'altra #card
		  id:: 63c4442d-7ab5-4a7d-a0cb-6dddd515af78
		  card-last-interval:: 4
		  card-repeats:: 2
		  card-ease-factor:: 2.22
		  card-next-schedule:: 2022-02-11T15:26:47.254Z
		  card-last-reviewed:: 2023-02-07T15:26:47.254Z
		  card-last-score:: 3
			- Siano $X_1 \sim \text{Exp}(\lambda_1)$ e $X_2 \sim \text{Exp}(\lambda_2)$ indipendenti[^2].
				- $$P(X_1 < X_2) = \frac{\lambda_1}{\lambda_1 + \lambda_2}$$
		- ### Probabilità che una VA esponenziale sia il minimo #card
		  card-last-interval:: 4
		  card-repeats:: 2
		  card-ease-factor:: 2.36
		  card-next-schedule:: 2022-02-11T19:48:03.163Z
		  card-last-reviewed:: 2023-02-07T19:48:03.163Z
		  card-last-score:: 3
			- Siano $X_{i=1,\ldots,n} \sim \text{Exp}(\lambda_i)$ indipendenti[^3]:
				- $$P\left(X_i = \min_{j=1, \ldots, n} X_j\right) = P\left(X_i < \min_{j \neq i} X_j\right) = \frac{\lambda_i}{\sum_{j=1}^n \lambda_j}$$
		- ### Distribuzione del minimo #card
		  card-last-interval:: 4
		  card-repeats:: 2
		  card-ease-factor:: 2.36
		  card-next-schedule:: 2022-02-11T19:51:07.940Z
		  card-last-reviewed:: 2023-02-07T19:51:07.940Z
		  card-last-score:: 3
		  id:: 63e2c1cd-fa20-4b35-b7a9-0663f028da22
			- Siano $X_{i=1,\ldots,n} \sim \text{Exp}(\lambda_i)$ indipendenti[^4]
				- \begin{aligned}
				  P(\min(X_1, \ldots, X_n) > x) &= \prod_{i=1}^n P(X_i > x)\\
				  &= \prod_{i=1}^n e^{-\lambda_i x} \\
				  &= \exp\left( -x\sum_{i=1}^n \lambda_i \right) \\
				  &\sim \text{Exp}\left( \sum_{i=1}^n \lambda_i \right)
				  \end{aligned}
- ((63c18093-6d10-4b28-b34e-0189ad96fd4c))
- Riferimenti
	- ![complprob-lav-7.pdf](../assets/complprob-lav-7_1669321364079_0.pdf)
	- ![introduction-to-prob-models-11th-edition.PDF](../assets/introduction-to-prob-models-11th-edition_1669215647562_0.PDF)
		- ((63824401-2264-4492-be68-c338aa97a3e3))
			- [^1]:((63835f8e-5b45-4ce8-873b-da35f38dd435))
			- [^2]: ((63836594-8030-4a1a-a667-07da62a98548))
			- [^3]: ((638365d9-341f-4f2a-8eb4-5b053b4a3aed))
			- [^4]: ((6383624e-8dab-4e7f-bc75-50cb4ba66b06))
	- Esercizi lez. 6 1:50