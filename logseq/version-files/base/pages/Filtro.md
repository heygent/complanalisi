# Filtro
	- Un filtro è un sistema che gode delle proprietà di ((64f0ed21-ef2f-4428-80d4-1a61c9c2fc60)), ((64f0ed21-4164-4b05-9568-8d7d172e248b)) e ((64f0ed21-ca43-460c-bd64-fcf998a8edf2)) #card
	  id:: 64f0ed21-afb3-44dd-aee4-c6ee06624e52
	- ## Funzione di trasferimento #card
		- Sia $e_\lambda^n(t)$ la frequenza pura $\lambda n$
			- Per comodità si definisce $e_\lambda(t) = e^{2\pi i \lambda t}$
			- $e^n_\lambda(t) = e^{2\pi i \lambda n t}$ per proprietà degli esponenziali
			- Si aggiunge l'esponente $n$ perché si è interessati a tutti i multipli della frequenza
		- Si supponga che le $e_\lambda^n(t) \in X$
		-
		- Se $x \in X$ suppongo che:
			- $$x(t) = \sum_{n = -\infty}^\infty c_n e_\lambda^n(t)$$
				- Posso riscrivere il segnale come somma infinita di frequenze pure moltiplicate per dei coefficienti.
				- La serie converge in $\|\ldots\|_X$
					- $$\lim_{N \rightarrow \infty}\left\|\sum_{n = -N}^N c_n e_\lambda^n(t) - x(t)\right\|_X = 0$$
		- \begin{aligned}
		  Ax(t) &= A\left(\sum_{-\infty}^\infty c_n e_\lambda^n(t) \right) \\
		  &= A\left( \lim_{N \rightarrow +\infty} \sum_{-N}^N c_n e_\lambda^n(t)  \right) \\
		  &= \lim_{N \rightarrow +\infty} A \left( \sum_{-N}^N c_n e_\lambda^n(t)\right) &\text{per A continuo} \\
		  &= \lim_{N \rightarrow +\infty} \sum_{-N}^N c_n A(e_\lambda^n)(t) &\text{per A lineare} \\
		  &= \lim_{N \rightarrow +\infty} \sum_{-N}^N c_n f_\lambda^{(n)}(t) \\
		  &= \sum_{n = -\infty}^\infty c_n f_\lambda^{(n)}(t) \\
		  \end{aligned}
		- Si supponga quindi di avere $e_\lambda(t) \xrightarrow{A} f_\lambda(t)$:
		- \begin{aligned}
		  e_\lambda(t + u) &= \tau_{-t} e(u) \\
		  &= e^{2\pi i \lambda(t + u)} \\
		  &= e^{2\pi i \lambda t} e^{2\pi i \lambda u} \\
		  &= e_\lambda(t) \cdot e_\lambda(u)
		  \end{aligned}
		- $$
		  \begin{aligned}
		  e_\lambda &\xrightarrow{A} f_\lambda \\
		  \tau_{-t}e_\lambda &\xrightarrow{A} \tau_{-t} f_\lambda
		  \end{aligned}
		  $$
			- Per ((64f0ed21-ca43-460c-bd64-fcf998a8edf2))
		- \begin{aligned}
		  \tau_{-t} f_\lambda &= f_\lambda(t + u) \\
		   &= A(e_\lambda(t) \cdot e_\lambda(u)) \\
		   &= e_\lambda(t) A(e_\lambda(u)) \\
		   &= e_\lambda(t) f_\lambda(u)
		  \end{aligned}
			- Per $u = 0$
				- \begin{aligned}
				  f_\lambda(t) = e_\lambda(t) f_\lambda(0) \quad \forall t \in R
				  \end{aligned}
				- La risposta del sistema $f_\lambda(t) = A(e_\lambda)(t)$ agli input $e_\lambda$ è $e_\lambda(t)$ moltiplicato per una costante che dipende solo da $\lambda$ (non da $t$)
					- $f_\lambda(0)$ sono autovalori di $A$
					- $e_\lambda$ sono autofunzioni
			- Funzione di trasferimento del sistema $A$:
				- $\lambda \rightarrow f_\lambda(0) = H(\lambda)$
	- ## Proprietà
		- Sia $A : X \rightarrow Y$
			- Alternativamente:
				- $A : x = x(t) \in X \rightarrow y = y(t) \in Y$
				- $A : x \rightarrow y$
		- ### Linearità #card
		  id:: 64f0ed21-ef2f-4428-80d4-1a61c9c2fc60
			- $\forall\,x_1, x_2 \in X$
			- $\forall\,\lambda, \mu \in \C$
			- $(\lambda x_1 + \mu x_2)(t) = \lambda x_1(t) + \mu x_2(t) \in X$
			- Se $x_1 \xrightarrow{A} y_1$ e $x_2 \xrightarrow{A} y_2$
				- Ovvero $y_1 = Ax_1$ e $y_2 = Ax_2$
				- Allora quando $A(\lambda x_1 + \mu x_2) = \lambda y_1 + \mu y_2$ dico che il sistema è lineare.
			- Dal punto di vista fisico corrisponde alla sovrapposizione degli effetti.
		- ### Causalità #card
		  card-last-interval:: -1
		  card-repeats:: 1
		  card-ease-factor:: 2.5
		  card-next-schedule:: 2023-08-27T22:00:00.000Z
		  card-last-reviewed:: 2023-08-27T08:35:58.860Z
		  card-last-score:: 1
			- Si vuole formalizzare il fatto che non anticipa i tempi e risponde al principio di causa-effetto.
			- Non è una proprietà obbligatoria di un filtro, ma lo rende realizzabile.
			- $$\tag{a} x_1(t) = x_2(t) \;\forall\, t < t_0 \quad\Rightarrow \quad Ax_1(t) = Ax_2(t) \;\forall\, t < t_0$$
				- Se le due funzioni sono uguali fino a un certo punto, l'output del sistema deve essere uguale fino a quel punto.
			- Equivalentemente:
				- $$x(t) = 0 \;\forall\, t < t_0 \quad \Rightarrow \quad Ax(t) = 0 \;\forall\, t < t_0 \tag{b}$$
			- $\text{a} \leftrightarrow \text{b}$
				- $\text{b}$ è un caso speciale di $\text{a}$ dove la funzione equazione è nulla.
				- $\text{b} \rightarrow \text{a}$
					- Dimostrazione (si supponga $A$ lineare):
						- $$\begin{aligned}
						  &\phantom{\rightarrow} z(t) = x_1(t) - x_2(t) = 0 &\forall\, t < t_0 \\
						  &\rightarrow Az(t) = 0 & \\
						  &\rightarrow A(x_1(t) - x_2(t)) = 0 & \\
						  &\rightarrow Ax_1(t) - Ax_2(t) = 0 & \\
						  &\rightarrow Ax_1(t) = Ax_2(t) &\forall \,t < t_0
						  \end{aligned}$$
							- Supporre che $z(t) = x_1(t) - x_2(t) = 0\,\forall\, t < t_0$ equivale a supporre che $x_1 = x_2\,\forall\,t < t_o$
		- ### Invarianza per traslazione #card
		  id:: 64f0ed21-ca43-460c-bd64-fcf998a8edf2
			- $$x(t) \rightarrow y(t) \quad \Rightarrow \quad x(t- a) \rightarrow y(t-a)$$
			- Una traslazione nel tempo dell'input porta alla stessa traslazione dell'input.
			- Nessun sistema rispetta in assoluto questa proprietà.
				- Generalmente oggetti fisici si logorano nel tempo, es. batteria.
			- Sia $\tau_a$ l'operatore delay definito da:
				- $$\tau_a x(t) = x(t - a)$$
			- Se $A$ è invariante, allora:
				- $$A(\tau_a x) = \tau_a (Ax) \quad \forall\,x \in X, a \in \mathbb{R}$$
				- $$A \tau_a = \tau_a A$$
					- Che significa che $A$ si commuta con le traslazioni.
		- ### Continuità #card
		  id:: 64f0ed21-4164-4b05-9568-8d7d172e248b
			- $x_n \rightarrow x \Rightarrow Ax_n \rightarrow Ax$
			-
			- $A$ è continuo da $(X, \|\ldots\|)$ in $(Y, \|\ldots\|)$ se:
				- $$
				  \begin{aligned}
				  \underbrace{x_n \rightarrow x \text{ in }(X, \|\ldots\|)} & \Rightarrow \underbrace{y_n \rightarrow y \text{ in }(Y, \|\ldots\|)} \\
				  \lim_{n \rightarrow \infty} \|x_n - x\|_X = 0 & \phantom{\Rightarrow} {\lim_{n \rightarrow \infty} \|y_n - y\|_Y = 0} \\
				  \end{aligned}$$
				- Ogni volta che ho una successione $x_n$ che tende a $x$ in $X$ rispetto alla norma fissata su $x$, $y_n$ tende a $y$ in $Y$ rispetto alla norma fissata su $Y$.
			- Dato che le $x$ non sono numeri ma funzioni, bisogna dare un concetto di limite che funzioni per le funzioni.
			- Per dare questo concetto, si usa l'idea di ((64ef30fb-b59c-4905-8565-25f72859cd0f)), definita su ognuno degli spazi vettoriali $X$ e $Y$.
			- #### Proprietà
				- $A$ è continuo da $(X, \|\ldots\|)$ in $(Y, \|\ldots\|)$ se e solo se:
					- per ogni $x \in X$ esiste $c > 0$ tale che:
					- $$ \|A_x\|_Y \le c \|x\|_X$$
					- L'output non è più grande dell'input moltiplicato per una costante fissa uguale per tutti gli input.
			- Esempio: il differenziatore non è continuo rispetto a $\|\ldots\|_\infty$
				- $x(t) \rightarrow x'(t)$
				- da norma infinito a norma infinito
				- si prenda $x_n(t) = \frac1n \sin(nt)$
				  collapsed:: true
					- <iframe src="https://www.desmos.com/calculator/bp0vfonqsp?embed" width="500" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>
				- \begin{aligned}
				  \|x_n - x\|_\infty &= \sup_{t \in \R}|x_n(t) - 0| \\
				  &= \sup_{t \in \R} \left| \frac{1}{n} \sin(nt) \right| \\
				  &= \frac{1}{n} \,\underbrace{\sup_{t \in \R} | \sin(nt)}_1 | \\
				  &= \frac{1}{n}
				  \end{aligned}
				- $\frac{1}{n} \rightarrow 0$ per $n \rightarrow \infty$
				- Per cui, $x_n \rightarrow 0$ in $\|\ldots\|_\infty$
				- \begin{aligned}
				  y_n &= Ax_n = x'_n \\
				  &= \cancel{\frac{1}{n}} \cos(nt) \cdot \cancel{n} \\
				  &= \cos(nt)
				  \end{aligned}
					- Per cui $y_n \xcancel{\longrightarrow} 0$ in $\|\ldots\|_\infty$
					- $$\|y_n\|_\infty = \sup_{t \in \R} |\cos(nt)| = 1 \xcancel{\longrightarrow} 0\,\, \forall n$$
					- $A0 = y = 0$
			- TODO Esercizio
			  :LOGBOOK:
			  CLOCK: [2023-09-01 Fri 06:10:27]--[2023-09-01 Fri 06:10:27] =>  00:00:00
			  :END:
				- $$A: x(t) \rightarrow y(t) = \int_{-\infty}^t e^{-(t-s)}x(s)\,ds$$
				- Dimostrare che $A$ è continuo rispetto a $(X, \|\ldots\|_\infty) \rightarrow (Y, \|\ldots\|_\infty)$
		-
			-