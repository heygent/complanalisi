tags:: complprob

- [CDF](((63c04756-49d9-45eb-9f27-8661a93b9ee6))) di distribuzione congiunta di due VA $X$ e $Y$:
	- $$P(X \le x, Y \le y) = F_{X,Y}(x, y)$$
- [CDF](((63c04756-49d9-45eb-9f27-8661a93b9ee6))) di distribuzione congiunta di due VA $X$ e $Y$ *indipendenti*:
	- $$P(X \le x, Y \le y) = F_X(x)F_Y(y)$$
- Casi particolari di distribuzioni congiunte:
	- $$\begin{aligned}
	  P(X < \infty, Y \le y) &= F_Y(y) \\
	  P(X < -\infty, Y \le y) &= 0 \\
	  P(X < \infty, Y < \infty) &= 1
	  \end{aligned}
	  $$
- [PDF](((63c04602-2397-4496-83b0-8afe13835646))) di variabili congiunte
	- $$f_{XY} = \frac{\partial\,F_{XY}(x, y)}{\partial x \partial y}$$
- [[Valore atteso]] di una distribuzione congiunta
	- $$\mathbb{E}[g(x,y)] = \int_\mathbb{R} \int_\mathbb{R} g(x, y) f_{X,Y}(x, y)\,dx\,dy$$
- La ((8dc21ea4-52c2-4986-a290-2b93a5bbdd8a)) continua a valere, per cui, se le variabili sono indipendenti:
	- $$\mathbb{E}[k(X)h(Y)] = \mathbb{E}[k(X)]\mathbb{E}[h(Y)]$$
- ## Covarianza #card
  id:: 63c194c5-df08-48e8-ba20-815b56041970
  card-last-interval:: 4
  card-repeats:: 2
  card-ease-factor:: 2.7
  card-next-schedule:: 2022-02-11T17:04:10.546Z
  card-last-reviewed:: 2023-02-07T17:04:10.547Z
  card-last-score:: 5
	- Valore che indica il legame tra due variabili
	- Corrisponde al momento secondo della distribuzione
	- $$\begin{aligned}
	  Cov(X, Y) &= \mathbb{E}[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])] \\
	  &= \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]
	  \end{aligned}$$
		- Dalla prima uguaglianza si può notare che se i due termini sono di segno concorde la covarianza è positiva, altrimenti no.
		- Il significato intuitivo della covarianza è:
			- Se è grande e positiva, più cresce una variabile più cresce l'altra (e viceversa, più decresce una più decresce l'altra)
			- Se è grande e negativa, più cresce una più decresce l'altra.
	- ### Indipendenza e non correlazione
	  id:: 63c44dd2-0304-461d-a006-ac34a2d1f97b
		- Se le variabili sono indipendenti, la covarianza è 0.
			- Non è generalmente vero il contrario: se le VA hanno covarianza 0, potrebbero comunque non essere indipendenti.
	-
- ## Coefficiente di correlazione #card
  id:: 63c19743-4972-4c56-af2a-5c0eb7301865
  card-last-interval:: 10.8
  card-repeats:: 3
  card-ease-factor:: 2.7
  card-next-schedule:: 2022-02-18T14:46:14.769Z
  card-last-reviewed:: 2023-02-07T19:46:14.770Z
  card-last-score:: 5
	- $$\rho_{X,Y} = \frac{Cov(X,Y)}{\sigma_X \sigma_Y}$$
		- con $\rho_{X,Y} \in [-1, 1]$
		-