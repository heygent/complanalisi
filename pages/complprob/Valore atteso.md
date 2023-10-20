tags:: complprob
alias:: Attesa

- # Definizione #card
  card-last-interval:: 4
  card-repeats:: 2
  card-ease-factor:: 2.46
  card-next-schedule:: 2022-02-11T15:23:10.128Z
  card-last-reviewed:: 2023-02-07T15:23:10.128Z
  card-last-score:: 3
	- Ogni variabile aleatoria possiede un proprio valore atteso, noto anche come media.
	- Per [[Variabile aleatoria discreta]]:
		- $$\mathbb{E}[X] = \sum_i x_i P(X=x_i)$$
			- Ovvero è uguale alla somma del valore degli eventi moltiplicato per la probabilità che essi si verifichino.
	- Per [[Variabile aleatoria continua]]:
		- $$\mathbb{E}[X] = \int_{-\infty}^{\infty}x \, f_X(x) \, dx$$
- ## Linearità della media
  id:: 8dc21ea4-52c2-4986-a290-2b93a5bbdd8a
	- La media è un operatore lineare. Dimostrazione:
		- $$\begin{aligned}
		  \mathbb{E}[X + Y + Z] &= \sum_{i,j,k}(x_i + y_j + z_k)P(X = x_i, Y=y_j, Z=z_k) \\
		  &= \sum_i x_i \underbrace{\sum_{i,j} P(X=x_i, Y=y_j, Z = z_k)}_{P(X=x_i)} \\
		  &+ \sum_j y_j \underbrace{\sum_{i,k} P(X=x_y, Y=y_j, Z=z_k)}_{P(Y=y_i)} \\
		  &+ \sum_k z_k \underbrace{\sum_{i,k} P(X=x_y, Y=y_j, Z=z_k)}_{P(Z=z_i)} \\
		  &= \mathbb{E}[X] + \mathbb{E}[Y] + \mathbb{E}[Z]
		  \end{aligned}$$
		-
	- {{embed ((63c03f33-6afa-4773-9e7b-bc6ab04a3ee5))}}
