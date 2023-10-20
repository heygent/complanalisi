tags:: complprob

- ![complprob-lav-1.pdf](../assets/complprob-lav-1_1666590288391_0.pdf)
- Probabilità #card
  card-last-score:: 3
  card-repeats:: 2
  card-next-schedule:: 2022-02-11T21:13:42.785Z
  card-last-interval:: 4
  card-ease-factor:: 2.46
  card-last-reviewed:: 2023-02-07T21:13:42.786Z
	- modo di misurare la possibilità che si verifichino certi eventi.
- Spazio campione $S$
  id:: 63bedbb0-a782-44bb-b229-f3e17434345a
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.5
  card-next-schedule:: 2022-01-21T23:00:00.000Z
  card-last-reviewed:: 2023-01-21T12:50:28.017Z
  card-last-score:: 1
	- collezione di tutti i possibili esiti di un esperimento
- evento $E \in S$
  card-last-interval:: 4
  card-repeats:: 1
  card-ease-factor:: 2.6
  card-next-schedule:: 2022-01-22T17:09:22.601Z
  card-last-reviewed:: 2023-01-18T17:09:22.602Z
  card-last-score:: 5
	- Un sottoinsieme dello ((63bedbb0-a782-44bb-b229-f3e17434345a))
- ## Definizione assiomatica della probabilità #card
  id:: 63c03f33-cd9b-4bac-8317-ca4b38765040
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.36
  card-next-schedule:: 2023-02-08T23:00:00.000Z
  card-last-reviewed:: 2023-02-07T23:08:15.659Z
  card-last-score:: 1
	- Considerato un evento $E$:
		- $0 \le P(E) \le 1$
		  logseq.order-list-type:: number
		- $P(S) = 1$
		  logseq.order-list-type:: number
		- Per ogni sequenza di eventi $\{E_{n\ge1}\}$ con $E_i \cap E_j = \varnothing$ (se gli eventi sono incompatibili):
		  id:: 63c03f33-48d2-4e93-a169-9b774ebd3a5c
		  logseq.order-list-type:: number
			- $$P\left(\bigcup_{i=1}^\infty E_i \right) = \sum_{i=1}^\infty P(E_i)$$
				- Se gli eventi non fossero incompatibili:
					- $$P\left(\bigcup_{i=1}^\infty E_i \right) < \sum_{i=1}^\infty P(E_i)$$
					- $$
					  \begin{aligned}
					  P\left(\bigcup_{i=1}^n E_i \right) &= \sum_{i=1}^n P(E_i) \\
					  &- \sum_{i<j}^\infty P(E_i \cap E_j) \\
					  &+ \sum_{i\le j \le k}^\infty P(E_i \cap E_j \cap E_k) \\
					  &+ \ldots (-1)^n P(E_1 E_2 \ldots E_n)
					  \end{aligned}
					  $$
	- $P(E)$ è la probabilità che si verifichi $E$.
		- Se posso trovare una funzione che gode di queste proprietà, posso chiamarla probabilità
	-
- ### Definizione classica
  card-last-score:: 5
  card-repeats:: 2
  card-next-schedule:: 2022-02-11T15:01:27.929Z
  card-last-interval:: 4
  card-ease-factor:: 2.7
  card-last-reviewed:: 2023-02-07T15:01:27.929Z
	- $$P = \frac{\text{n. casi favorevoli}}{\text{n. casi possibili}}$$
- ### Definizione frequentista
  card-last-score:: 5
  card-repeats:: 2
  card-next-schedule:: 2022-02-11T15:15:14.304Z
  card-last-interval:: 4
  card-ease-factor:: 2.7
  card-last-reviewed:: 2023-02-07T15:15:14.304Z
	- $$P = \frac{\text{n. successi}}{\text{n. prove}}$$
- # Probabilità condizionata
	- $$P(E|F) = \frac{P(E, F)}{P(F)}$$
	- $$P(E, F) = P(E|F)P(F)$$
	- $$P(E, F, G) = P(E, F | G) P(G) = P(E | F, G)P(F, G)P(F)$$
	- ## Regola della moltiplicazione
		- $$P\left(\bigcap_{i=1}^n A_i\right) = P(A_1) P(A_2|A_1) P(A_3 | A_1, A_2) \ldots P\left(A_n | \bigcap_{i=1}^n A_i\right)$$
- # Indipendenza
	- E ed F si dicono indipendenti se
		- $P(E,F) = P(E)P(F)$
		- $P(E|F) = P(E)$
- # Teorema delle probabilità totali
	- Siano $A_1, A_2, \ldots A_n$ eventi disgiunti che formano una partizione dello spazio campionario . Allora per ogni evento $B$ si ha:
	- $$\begin{aligned}
	  P(B) &= P(A_1, B) + \ldots + P(A_n, B) \\
	  &= P(A_1) P(B|A_1) + \ldots + P(A_n)P(B|A_n) \quad \text{per }P(A_i) > 0\, \forall\,i
	  \end{aligned}$$