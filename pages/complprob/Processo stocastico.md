tags:: complprob

- ((637e4bd1-09ca-4c2a-acf2-e7da414d9e81))
- # Definizione #card
  card-last-interval:: 4
  card-repeats:: 2
  card-ease-factor:: 2.22
  card-next-schedule:: 2022-02-11T17:12:03.206Z
  card-last-reviewed:: 2023-02-07T17:12:03.214Z
  card-last-score:: 3
	- Un processo stocastico è una famiglia di variabili aleatorie $\{X(t), t \in T\}$
		- definite sullo stesso spazio di probabilità $(\Omega, A, P)$
		- a valori su uno spazio misurabile $S$
		- indicizzate da un insieme indice ordinato $T$.
	- Descrive l'evoluzione nel tempo di qualche processo.
		- $X_n$ è nello stato $i$ al tempo $n$ se $X_n =i$.
		- #+BEGIN_TIP
		  Ad esempio, $X(t)$ può essere uguale al numero di clienti che sono entrati in un supermercato al tempo $t$.
		  #+END_TIP
	- ((63ce67ac-4c54-43a5-a152-fb10da8d3844))
		- Se fisso il tempo $t = \bar{t}$, allora $X_{\bar{t}}$ è una [[VA]].
		- Se fisso un $\omega \in \Omega$ risultato di un esperimento, allora $X_t(\omega)$ è una funzione (deterministica, non aleatoria) del tempo.
	- ## Tipi di processi
		- I processi stocastici possono avere:
			- spazio e tempo discreti
			  id:: 63ce922f-9da9-46d4-887c-c385310a7887
				- Es. contare individui (spazio) in giorni successivi (tempo)
					- $\{M_{n \ge 0}\}$
						- $M \in N^+$ indica il numero degli individui
						- $n \in N^+$ indica il giorno
			- spazio discreto e tempo continuo
				- Es. chiamate che arrivano in un centralino telefonico
					- $\{N_{t \ge 0}\}$
						- $N \in N^+$ indica il numero di chiamate in una giornata
						- $t \in [0, \infty)$ indica il tempo che scorre in maniera continua
			- spazio continuo e tempo discreto
				- Es. un peso che mano a mano aumenta considerando il tempo su istanti successivi
			- spazio e tempo continui
				- Es. osservo le molecole di un gas che si muovono in maniera irregolare e casuale.
					- La loro posizione e  tempo sono nel continuo.