tags:: complanalisi

- # Circuito RC #card
	- ((64ee5717-cb9b-40d9-9b66-a586754311c9))
	- ## Grandezze fisiche di interesse
		- $I$ corrente
		- $Q$ carica
		- $V$ voltaggio/tensione
		- $C$ costante del condensatore
		- $R$ resistenza
	- ## Identità utili
		- $I = Q'$
			- derivata prima della carica rispetto al tempo
		- $V = IR$
			- legge di Ohm
		- $Q = VC$
		  id:: 64ee366b-1c8e-4248-a232-59016644c8ff
	- ## Sistema
		- $A: x \rightarrow V$
			- $x$ è il voltaggio che inserisco, e $V(t)$ è il voltaggio che si crea in $C$
		- Se non ci fosse resistenza, $V = x$
		- Con resistenza:
			- \begin{aligned}
			  V &= x - IR \\
			  &= x - Q'R \\
			  &= x - CV'R
			  \end{aligned}
			-
			- L'equazione differenziale che descrive il sistema è:
				- $$RCV' + V = x$$
			- Questo dato che:
				- ((64ee366b-1c8e-4248-a232-59016644c8ff))
				- $Q' = V'C$
				- $V$ e $x$ sono funzioni, $C$ è una costante
	- Questa è la relazione che lega l'input all'output del sistema:
	  $$RCv'(t) + v(t) = x(t)$$
	  Per risolverla ridefinisco variabile:
	  $$
	  \begin{aligned}
	  v(t) &\coloneqq w(t)e^{\frac{-t}{RC}}\\
	  w(t) &= e^{\frac{-t}{RC}} \cdot v(t) \\
	  v' &= w' \exp{\frac{-t}{RC}} + w \exp\frac{-t}{RC}\cdot -\frac{1}{RC}
	  \end{aligned}
	  $$
	  
	  Sostituendo:
	  $$
	  \begin{aligned}
	  RC\left(w' e^{\frac{-t}{RC}} + we^{\frac{-t}{RC}} \cdot \frac{-1}{RC}\right) + we^{\frac{-t}{RC}} &= x\\
	  RC\left(w' - \frac{w}{RC}\right)+ w &= x e^{\frac{t}{RC}}  \\
	  RCw' \cancel{-w} \cancel{+w} &= xe^{\frac{t}{RC}} \\
	  w' &= \frac{1}{RC}e^{\frac{t}{RC}} x(t)
	  \end{aligned}
	  $$
	  A questo punto l'equazione differenziale si riduce a risolvere un integrale:
	  $$
	  w(t) = \frac{1}{RC} \int\limits_{-\infty}^t e^{\frac{s}{RC}}x(s)\,ds + K
	  $$
	  con $K$ arbitrario.
	  Per determinare $K$, posso porre come condizione che $A0 = 0$, per cui $K = 0$
	  $$w(t) = \frac{1}{RC} \int\limits_{-\infty}^t e^{\frac{s}{RC}} x(s)\,ds$$
	  Dato che: 
	  $$ w(t) = e^{\frac{-t}{RC}} \cdot v(t)$$
	  Allora:
	  $$
	  \begin{aligned}
	  v(t) &= \frac{e^{\frac{-t}{RC}}}{RC} \int_{-\infty}^t \frac{s}{RC}s(x)\,ds\\
	  &= \frac{1}{RC} \int_{-\infty}^t e^{\frac{-(t-s)}{RC}}x(s) \,ds
	  \end{aligned}
	  $$
	- ## Proprietà
	- ### Continuo
	  
	  Vedi [[Filtro#Continuità#Esercizio]]
	  $$\|Ax\|_\infty \le \|x\|_\infty$$
	- ### Lineare
	  
	  $x_1(t),x_2(t) \in X$
	  $\lambda_1, \lambda_2 \in \R$
	  
	  $$
	  \begin{aligned}
	  &\phantom{==} A(\lambda_1 x_(t) + \lambda_2x_2(t))\\
	  &= \frac{1}{RC}\int_{-\infty}^t \expfn{-\frac{t-s}{RC}}(\lambda_1x_1(t) + \lambda_2x_2(t))\,ds\\
	  &= \frac{1}{RC}\int_{-\infty}^t \lambda_1 \expfn{-\frac{t-s}{RC}}x_1(s) + \lambda_2\expfn{-\frac{t-s}{RC}}x_2(s)\,ds\\
	  &= \lambda_1\frac{1}{RC}\int_{-\infty}^t  \expfn{-\frac{t-s}{RC}}x_1(s)\,ds + \lambda_2\frac{1}{RC}\int_{-\infty}^t\expfn{-\frac{t-s}{RC}}x_2(s)\,ds\\
	  &= \lambda_1 Ax_1(t) + \lambda_2 Ax_2(t)
	  \end{aligned}
	  $$
	- ### Invariante per traslazione
	  
	  $x(t) \rightarrow v(t)$
	  $x(t - a) \xrightarrow{?} v(t-a)$
	  
	  $$
	  \begin{aligned}
	  A[\tau_a x](t) &= \frac{1}{RC}\int_{-\infty}^t e^{-\frac{t-s}{RC}} x(s-a)\,ds &y &= s - a\\
	  &= \frac{1}{RC}\int_{-\infty}^{t-a}e^{-\frac{t - (y+a)}{RC}}x(y)\,dy\\
	  &= \frac{1}{RC}\int_{-\infty}^{t-a} e^{-\frac{(t-a) - y}{RC}}x(y)\,dy\\
	  &= v(t-a)
	  \end{aligned}
	  $$
	- ## [[Funzione di trasferimento]]
	- ### Espressione in termini di [[Convoluzione]]
	  
	  Pongo:
	  
	  $$
	  h(t) = \frac{1}{RC}e^{\frac{-t}{RC}}\cdot u(t)
	  $$
	  ^hoft
	  
	  Con $u(t)$ uguale alla [[Segnale#Funzione Heaviside|Funzione Heaviside]].
	  <iframe class="desmos-graph" src="https://www.desmos.com/calculator/k9zd5s0wxc?embed" width="500" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>
	  $$ (h * x)(t) = \int_{-\infty}^{\infty} h(t-s)x(s)\,ds$$
	  $h(t-s) = 0$ se $t-s < 0$.
	  Per cui posso integrare solo per gli $s < t$:
	  $$
	  \begin{aligned}
	  (h * x)(t) &= \int_{-\infty}^{t}h(t- s)x(s)\,ds\\
	  &= \int_{-\infty}^t\frac{1}{RC} e^{\frac{t-s}{RC}}x(s)\,ds\\
	  &= v(t)
	  \end{aligned}
	  $$
	  
	  Per cui $v(t) = h * x$, dove:
	  ![[Circuito RC#^hoft]]
	- ### Passaggio finale
	  
	  Sia $x(t) = e_\lambda(t)$.
	  Dato che:
	  
	  ![[Funzione di trasferimento#^transferfunctioneq]]
	  
	  Allora:
	  $$
	  \begin{aligned}
	  v(t) &= H(\lambda)e_\lambda(t)\\
	  &= H(\lambda)e^{2\pi i \lambda t}\\
	  v'(t) &= H(\lambda)e^{2\pi i \lambda t}\cdot 2\pi i \lambda
	  \end{aligned}
	  $$
	  Sostituendo nell'equazione del sistema:
	  
	  ![[Circuito RC#^eqfiltrorc]]
	  
	  
	  $$
	  \begin{gathered}
	  RC H(\lambda)\cdot2\pi i \lambda\cdot \cancel{e^{2\pi i \lambda t}} + H(\lambda) \cdot \cancel{e^{2 \pi i \lambda t}} = \cancel{e^{2 \pi i \lambda t}} \\
	  H(\lambda)(2\pi i \lambda RC + 1) = 1 \\
	  H(\lambda) = \frac{1}{1 + 2 \pi i \lambda RC}
	  \end{gathered}
	  $$
	  > [!note]
	  Il fatto che la funzione sia a valori complessi può essere "fastidioso", ma fino a un certo punto dato che poi quello che interessa è il modulo della funzione, dato che è quello a influire sull'amplificazione o smorzamento delle frequenze.
	  
	  $$
	  \begin{aligned}
	  |H(\lambda)| &=  \frac{1}{| 1 + 2\pi i \lambda RC |}\\\\
	  &= \frac{1}{\sqrt{1 + 4\pi^{2}R^{2}C^2\lambda^2}}
	  \end{aligned}
	  $$
	  Considerando nel [[Numeri complessi#Modulo|modulo]]
	- $1$ parte reale
	- $2\pi i \lambda RC$ parte immaginaria.
	  <iframe class="desmos-graph" src="https://www.desmos.com/calculator/4onthbjdxw?embed" width="500" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>
	  La frequenza $\lambda_{C} = \frac{1}{2\pi RC}$ è detta frequenza di cutoff. Oltre questa, le frequenze di input sono ridotte da un fattore maggiore di $\frac{1}{\sqrt{2}}$.
	  
	  Per cui è una buona approssimazione di un [[Filtro passa-basso]].
		- Muovendo lentamente la $x$ nel tempo, ovvero aumentando e diminuendo il voltaggio, la resistenza può essere d'intralcio ma nel complesso l'uscita $V$ segue abbastanza bene la $x$ .
		- Muovendo la $x$ velocemente, la $R$ smorza le oscillazioni.