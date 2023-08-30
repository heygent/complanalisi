# Circuito RC #card
	- ((64ee5717-cb9b-40d9-9b66-a586754311c9))
	- Grandezze fisiche di interesse:
		- $I$ corrente
		- $Q$ carica
		- $V$ voltaggio/tensione
		- $C$ costante del condensatore
		- $R$ resistenza
	- $I = Q'$
		- derivata prima della carica rispetto al tempo
	- legge di Ohm
		- $V = IR$
		- $Q = VC$
		  id:: 64ee366b-1c8e-4248-a232-59016644c8ff
	- $A: x \rightarrow V$
		- $x$ è il voltaggio che inserisco, e $V(t)$ è il voltaggio che si crea in $C$
		- Se non ci fosse resistenza, $V = x$
		- Con resistenza:
			- \begin{aligned}
			  V &= x - IR \\
			  &= x - Q'R \\
			  &= x - CV'R \\ 
			  RCV' + V &= x
			  \end{aligned}
				- Questo dato che:
					- ((64ee366b-1c8e-4248-a232-59016644c8ff))
					- $Q' = V'C$
			- $V$ e $X$ sono funzioni, $C$ è una costante
	- Modello di filtro passa-basso
		- Muovendo lentamente la $x$ nel tempo, ovvero aumentando e diminuendo il voltaggio, la resistenza può essere d'intralcio ma nel complesso l'uscita $V$ segue abbastanza bene la $x$.
		- Muovendo la $x$ velocemente, la $R$ smorza le oscillazioni.
		-