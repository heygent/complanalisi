tags:: complprob

- # Definizione #card
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.36
  card-next-schedule:: 2023-02-08T23:00:00.000Z
  card-last-reviewed:: 2023-02-07T23:15:31.482Z
  card-last-score:: 1
	- Conta il numero di eventi fino al tempo $t \in \mathbb{R}^+$.
	- Un [processo]([[Processo stocastico]]) si dice processo di conteggio se:
		- $N(t) \ge 0$
		  logseq.order-list-type:: number
		- $N(t) \in \mathbb{N} \quad\quad t \ge 0$
		  logseq.order-list-type:: number
		- Se $s < t$ allora $N(s) \le N(t)$
		  logseq.order-list-type:: number
		- Se $s < t$ allora $N(t) - N(s)$ conta il numero di eventi in $(s, t]$
		  logseq.order-list-type:: number
- # Incremento del processo
	- Dati due istanti $s, t$ con $s < t$ si dice **incremento** del processo la quantità $N(t) - N(s)$.
	  collapsed:: true
		- ((6383692a-2ea1-4553-8a30-c2a9c3cdd9bf))
	- ## Proprietà
		- ### Incrementi indipendenti #card
		  card-last-score:: 1
		  card-repeats:: 1
		  card-next-schedule:: 2023-02-08T23:00:00.000Z
		  card-last-interval:: -1
		  id:: 638369c7-cefd-42b2-9eb1-03830899aade
		  card-ease-factor:: 2.6
		  card-last-reviewed:: 2023-02-07T23:16:11.409Z
			- Il numero di eventi che si verificano in intervalli disgiunti sono variabili aleatorie indipendenti.
			- $$
			  \begin{gathered}
			  N(t_2) - N(t_1) \perp N(t_4) - N(t_3) \\
			  \forall\,t_1 < t_2 < t_3 < t_4
			  \end{gathered}
			  $$
		- ### Incrementi stazionari #card
		  id:: 63836a0f-daaf-4c4c-8a19-c290ba8816e4
		  card-last-interval:: -1
		  card-repeats:: 1
		  card-ease-factor:: 2.36
		  card-next-schedule:: 2023-02-08T23:00:00.000Z
		  card-last-reviewed:: 2023-02-07T23:12:32.784Z
		  card-last-score:: 1
			- La distribuzione del numero degli eventi che occorrono in un qualunque intervallo dipende solo dalla lunghezza dell'intervallo.
			- In altre parole, il processo ha incrementi stazionari se il numero degli eventi nell'intervallo $(s, s + t)$ ha la stessa distribuzione per ogni $s$.
			- $$\begin{gathered}N(s + t) - N(t) \sim N(s) - N(0) \\ \forall s,t \end{gathered}$$
- Riferimenti
	- ((638368d2-5de4-4c63-a6a2-439f3a8af685))