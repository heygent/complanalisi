tags:: complprob

- # Definizione 1 #card
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.36
  card-next-schedule:: 2023-02-08T23:00:00.000Z
  card-last-reviewed:: 2023-02-08T02:16:12.114Z
  card-last-score:: 1
	- Sia $\{X_{t \ge 0}\}$ un processo stocastico a valori sugli interi non negativi. $\{X_t\}$ si dice catena di Markov a tempo continuo se:
		- \begin{aligned}
		  &\phantom{=}P(X(t) = j | X(s) = i, X(u) = x(u), 0 \le u \le s) \\ &= P(X(t) = j | X(s) = i)
		  \end{aligned}
			- $\forall s, t > 0$
			- $i, j, x(u) \in \mathbb{N}$
		- Per preservare la proprietà di Markov, un processo di Markov a tempo continuo deve avere [intertempi](((63c03f33-b015-4415-8e27-3340b8725eb1))) [esponenziali]([[Distribuzione Esponenziale]]).
	- La catena è [temporalmente omogenea](((63e2c1cd-f770-4cb8-8e15-3fa4a50f55f5))) se:
		- \begin{aligned}
		  P(X(t) = j | X(s) = i) &= P(X(t - s) = j | X(0) = i)
		  \end{aligned}
- # Distribuzione del tempo #card
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.5
  card-next-schedule:: 2023-02-08T23:00:00.000Z
  card-last-reviewed:: 2023-02-08T07:37:18.817Z
  card-last-score:: 1
	- Si considera il caso di una catena temporalmente omogenea
	- Tempo 0, che la catena sia in $i$
	- Probabilità che il processo lasci $i$ dopo un ulteriore tempo $t$
	- $T_i$: tempo trascorso in $i$ del processo
	- $$P(T_i > t + s | T_i > s) = P(T_i > t | T_i > 0)$$
	- $P(T_i > t | T_i > 0)$: Probabilità che non ci siano eventi in $(s, s+t)$ o $(0, t)$
	- Perché si applichi proprietà di Markov:
		- $$P(T_i > t + s | T_i > s) = P(T_i > t) \quad \forall s, t \ge 0$$
		- Coincide con la proprietà di [assenza di memoria](((63833964-6561-46f6-8dc0-e2d738686ec3)))
			- {{embed ((63e2c1cd-d6b8-456e-a99a-9fe787319a46))}}
		- Perché ci sia assenza di memoria, $T_i \sim \exp(\lambda)$
		- Markov $\rightarrow$ $T_i$ esponenziali
- # Definizione 2 #card
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.36
  card-next-schedule:: 2023-02-08T23:00:00.000Z
  card-last-reviewed:: 2023-02-08T02:07:09.793Z
  card-last-score:: 1
	- Un processo stocastico è una catena di Markov a tempo continuo se:
		- Ogni volta che il processo entra nello stato $i$, vi rimane per un tempo [esponenziale]([[Distribuzione Esponenziale]]) con media $\frac{1}{v_i}$.
		  logseq.order-list-type:: number
			- I tempi in ciascuno stato sono indipendenti, come conseguenza dell'assenza di memoria.
			  logseq.order-list-type:: number
		- Se il processo lascia lo stato $i$, esso entra in uno stato $j$ con probabilità $P_{ij}$, con:
		  logseq.order-list-type:: number
			- \begin{dcases}
			  P_{ij} \ge 0 \\
			  \sum_j P_{ij} = 1
			  \end{dcases}
	- ## Esempio
		- ((63e21ea1-7ab5-4908-983b-12ed8ff726be))
			- I clienti arrivano secondo un processo di Poisson di parametro $\lambda$.
			- Il cliente si ferma solo se il tunnel di lavaggio è vuoto e la pulizia interna è vuota.
		- ### Stati
			- |Stato | Descrizione |
			  |--|--|
			  |0 | Sistema vuoto |
			  |1 | Lavaggio |
			  |2  | Pulizia interna |
		- $$P = \begin{bmatrix}
		  0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0
		  \end{bmatrix}$$
			- Il processo si sposta sempre con probabilità 1 da uno stato al successivo.
		- ### Tempi
			- $v_0 = \lambda$
			- $v_1 = \mu_1$
			- $v_2 = \mu_2$
- # Processo di nascita e morte
	- Lo stato del processo corrisponde a un conteggio:
		- $i \rightarrow i + 1$
			- $\{\lambda_n\}$ frequenze di nascite
		- $i \rightarrow i - 1$
			- $\{\mu_n\}$ frequenza di morte
		- Gli stati possono essere $0, 1, 2, \ldots$
	- Le possibili transizioni possono andare dallo stato corrente $i$ a $i + 1$ o $i - 1$
	- ## Definizione del processo tramite catena di Markov
		- $P_{0,1} = 1$
		- $P_{i,i+1} = \frac{\lambda_i}{\lambda_i + \mu_i}$
			- Probabilità di avere nascita prima della morte
				- {{embed ((63c4442d-7ab5-4a7d-a0cb-6dddd515af78))}}
		- $P_{i, i-1} = \frac{\mu_i}{\lambda_i + \mu_i}$
			- Probabilità di avere morte prima della nascita
		- $v_0 = \lambda_i$
		- $v_i = \lambda_i + \mu_i$
		  collapsed:: true
			- {{embed ((63e2c1cd-fa20-4b35-b7a9-0663f028da22))}}
- ## Nascita con frequenza lineare (processo di Yule)
	- È un Branching Process
	- Tempo continuo:
		- Ogni individuo agisce indipendentemente dagli altri e genera discendenti a tempi esponenziali
	- Come caratterizzare il processo come una catena di Markov a tempo continuo?
	- $\{X(t)\}$: dimensione della popolazione al tempo $t$
	- \begin{dcases}
	  \lambda_n = n \lambda + \theta\\
	  \mu_n = n\mu
	  \end{dcases}
		- Nascite e morti con frequenza lineare
		- Si aggiunge il parametro $\theta$ per considerare se qualcuno dovesse arrivare da fuori.
	- Si vuole trovare $M(t) = \mathbb{E}[X(t)]$.
	- Stato iniziale $X(0) = i$
	- \begin{aligned}
	  M(t+h) &= \mathbb{E}[X(t + h)] \\
	  &= \mathbb{E}[\mathbb{E}[X(t + h)|X(t)]] \\
	  \end{aligned}
		- {{embed ((63628cd4-13d5-4532-8200-6db4dfe9f530))}}
		- Studiando i possibili valori e le loro rispettive probabilità:
			- $$
			  X(t+h) = \begin{dcases}
			  X(t) + 1 & [\theta + \lambda X(t)]h + o(h)\\
			  X(t) - 1 & \mu X(t) h + o(h)\\
			  X(t) & 1 - [\theta + \lambda X(t) + \mu X(t)]h + o(h)
			  \end{dcases}
			  $$
		- \begin{aligned}
		  \mathbb{E}[X(t+h) | X(t)] &= (X(t) + 1) [\theta + \lambda X(t)] h \\
		  &+ (X(t) - 1)  (\mu X(t) h) \\
		  &+ X(t) [1 - [\theta + \lambda X(t) + \mu X(t) h]] \\
		  &+ o(h) \\
		  &= X(t) + [\theta + \lambda X(t) - \mu X(t)] h + o(h) \\
		  \\
		  M(t + h) &=  M(t) + [\theta + (\lambda - \mu)M(t)] h + o(h) \\
		  \\
		  \frac{M(t + h) - M(t)}{h} &=  \theta + (\lambda - \mu)M(t) + \frac{o(h)}{h} \\
		  \lim_{h \rightarrow 0}\frac{M(t + h) - M(t)}{h} = \frac{dM}{dt} &=  \theta + (\lambda - \mu)M(t)\\
		  \end{aligned}
			- Si arriva a un'equazione differenziale.
				- Se $\lambda = \mu$
					- $\frac{dM}{dt} = \theta$
					- $M(t) = \theta t + i$
				- Se $\lambda \neq \mu$
					- $M(t) = \frac{\theta(e^{(\lambda - \mu)t - 1}}{\lambda - \mu} + i e^{(\lambda - \mu)t}$
			- Se $t \rightarrow \infty$:
				- $M(t) = \mathbb{E}[X(t)] \rightarrow \infty$ per $\lambda > \mu$
				- $M(t) \rightarrow \infty$ per $\lambda = \mu$
				- $M(t) = \frac{\theta}{\lambda - \mu}$ per $\lambda < \mu$
- # Problemi di Nascite e Morte
	- ## Coda M/M/1
		- Arrivi esponenziali, partenze esponenziali, un servitore
	- ## Coda M/M/s
		- s servitori