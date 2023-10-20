tags:: complprob

- È la più semplice [[Catena di Markov a Tempo Continuo]] e a spazio degli stati discreto.
- {{embed [[Processo di conteggio]]}}
- # Definizioni #card
  card-last-interval:: 8.88
  card-repeats:: 3
  card-ease-factor:: 2.22
  card-next-schedule:: 2022-02-16T16:33:12.800Z
  card-last-reviewed:: 2023-02-07T19:33:12.800Z
  card-last-score:: 3
	- ## Definizione 1
		- Un processo di conteggio si dice di Poisson se:
			- $N(0) = 0$
			  logseq.order-list-type:: number
			- Ha ((638369c7-cefd-42b2-9eb1-03830899aade))
			  logseq.order-list-type:: number
			- Il numero di eventi che si verificano in un intervallo $(s, t]$, $\forall s, t > 0$ è una [VA di Poisson]([[Distribuzione di Poisson]]) di parametro $\lambda(t - s)$
			  logseq.order-list-type:: number
				- $$
				  P(N(t) - N(s) = k) = \frac{\lambda(t - s)^k e^{-\lambda(t - s)}}{k!}
				  $$
				- Da questa proprietà, segue che gli incrementi sono stazionari.
				- Si può anche osservare che $\mathbb{E}[N(t)] = \lambda t$
		- È difficile stabilire con questa definizione, di fronte a un processo di conteggio, stabilire se questo sia un processo di Poisson.
			- È difficile dire che $N(t) - N(s) \sim \text{Poisson}$ per ogni possibile $t$ ed $s$.
			- Si può controllare per una specifica coppia di $t$ ed $s$, ma non per tutte.
	- ## Definizione 2
		- Il processo ${N(t)}$ è un processo di Poisson se:
			- $N(0) = 0$
			  logseq.order-list-type:: number
			- Ha ((638369c7-cefd-42b2-9eb1-03830899aade)) e [stazionari](((63836a0f-daaf-4c4c-8a19-c290ba8816e4)))
			  logseq.order-list-type:: number
			- $P(N(h) = 1) = \lambda h + o(h)$
			  logseq.order-list-type:: number
			- $P(N(h) \ge 2) = o(h)$
			  logseq.order-list-type:: number
				- Dove $o(h)$[^1] significa:
					- $$\lim_{h\rightarrow 0} \frac{f(h)}{h} = 0$$
		- Questa definizione stabilisce che, in un intervallo piccolo, la probabilità che due eventi avvengano nello stesso momento è trascurabile.
		- Per stabilire se un processo sia di Poisson, posso chiedermi se la probabilità che si verifichi qualcosa in un intervallo piccolo è una probabilità bassa che dipende dalla lunghezza dell'intervallo.
			- Più è piccolo l'intervallo, più è difficile che un evento accada.
			- È molto difficile che ne accadano due simultanei (quasi impossibile).
	- ## Definizione 3
		- Un processo di Poisson è un processo di conteggio in cui gli [intertempi](((63c03f33-b015-4415-8e27-3340b8725eb1))) tra gli eventi sono [VA esponenziali]([[Distribuzione Esponenziale]]) indipendenti di parametro $\lambda$
			- Per simulare un processo di Poisson, potrei semplicemente simulare della VA esponenziali.
			- Il processo varrà 1 dopo il tempo della prima VA, 2 dopo il tempo della seconda ecc.
- # Distribuzione degli intertempi[^2] #card
  id:: 63c03f33-b015-4415-8e27-3340b8725eb1
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.5
  card-next-schedule:: 2023-02-08T23:00:00.000Z
  card-last-reviewed:: 2023-02-07T23:04:01.686Z
  card-last-score:: 1
	- Sia $T_i$ il tempo tra l'$(i - 1)$-mo eventi e l'$i$-esimo.
		- Dire che il primo evento accade dopo $t$ equivale a dire che il numero di eventi tra $0$ e $t$ è uguale a 0.
	- \begin{aligned}
	  P(T_1 > t) &= P(N(t) - N(0) = 0) \\
	  &= \frac{[\lambda(t - 0)]^0}{0!} e^{-\lambda t} \\
	  &= e^{-\lambda t} \\
	  T_1 &\sim \exp(\lambda)
	  \end{aligned}
	- \begin{aligned}
	  P(T_2 > t | T_1 > s) &= P(N(s + t) - N(s) = 0 | T_1 > s) \\
	  &= P(N_t =0 | T_1 = s) \\
	  &= e^{-\lambda t} \\
	  T_2 &\sim \exp(\lambda)
	  \end{aligned}
	- $T_{i=1,2,\ldots}$ sono variabili aleatorie [esponenziali]([[Distribuzione Esponenziale]]) indipendenti e identicamente distribuite di parametro $\lambda$
	  collapsed:: true
		- ((63848d78-7fb8-4713-85f4-7dbb3b92d636))
	- $T_{i=1,2,\ldots}$ è detta *sequenza degli intertempi*.
	- ## Distribuzione del tempo fino all'n-esimo evento
		- $$S_n = \sum_i T_i$$
			- $T_i$ intertempi, quindi variabili aleatorie esponenziali indipendenti e identicamente distribuite
			- {{embed ((63c443ec-ddaf-43b2-b707-cf70cea0f00e))}}
			- Per cui $S_n \sim \text{Gamma}(n,\lambda)$
			-
- # Proprietà del Processo di Poisson
	- ## Proprietà 1 #card
	  card-last-interval:: -1
	  card-repeats:: 1
	  card-ease-factor:: 2.6
	  card-next-schedule:: 2023-02-08T23:00:00.000Z
	  card-last-reviewed:: 2023-02-08T02:31:02.467Z
	  card-last-score:: 1
		- Se $N(t) = N_1(t) + N_2(t)$ è un processo di Poisson di parametro $\lambda$ allora $N_1(t)$ e $N_2(t)$ sono due processi di Poisson indipendenti di parametri $\lambda p$ e $\lambda(1 -p)$.
	- ## Proprietà 2 #card
	  card-last-interval:: -1
	  card-repeats:: 1
	  card-ease-factor:: 2.36
	  card-next-schedule:: 2023-02-08T23:00:00.000Z
	  card-last-reviewed:: 2023-02-08T02:29:41.208Z
	  card-last-score:: 1
		- Si considerino due processi di Poisson indipendenti di parametro $\lambda_1$ e $\lambda_2$.
			- ((63dd1a8e-7d0b-4104-ad83-b808f4c1c95e))
		- Siano:
			- $S^1_n$ tempo dell'$n$-esimo evento del primo processo
			- $S^2_m$ tempo dell'$m$-esimo evento del secondo processo
		- Ci interessa $P(S^1_n < S^2_m)$.
		- Se $n = 1, m = 1$:
			- $P(S_1^1 < S^2_1) = P(T_1 < T_2) = \frac{\lambda_1}{\lambda_1 + \lambda_2}$
		- Se $n = 2, m = 1$:
			- $P(S^1_2 < S^2_2) = \left(\frac{\lambda_1}{\lambda_1 + \lambda_2}\right)^2$
		- Per $m = 1$:
			- $P(S^1_k < S^2_1) = \left(\frac{\lambda_1}{\lambda_1 + \lambda_2}\right)^k$
		- In generale:
			- $$P(S^1_n < S^2_m) = \sum_{k = n}^{\infty}\binom{n + m - 1}{k}\left(\frac{\lambda_1}{\lambda_1 + \lambda_2}\right)^k \left(\frac{\lambda_2}{\lambda_1 + \lambda_2}\right)^{n + m - 1 - k}$$
			-
		-
- Riferimenti
	- ![introduction-to-prob-models-11th-edition.PDF](../assets/introduction-to-prob-models-11th-edition_1669215647562_0.PDF)
		- [^1]: ((63870e97-fa61-41af-973c-7d80eb73eee8))
		- [^2]: ((6387121a-79e5-4e12-8ff2-17d11e8ccbf7))
	- ![complprob-lav-7.pdf](../assets/complprob-lav-7_1669321364079_0.pdf)