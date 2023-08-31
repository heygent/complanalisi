# Filtro
id:: 64eaeffe-89d2-49f4-a49f-e0d3264f40d1
	- Un filtro è un sistema che gode delle proprietà di ((6495cd82-7d09-45ed-bb57-0becdb7682d1)), ((6495cd82-a9f1-4f4d-b03d-607629923f63)) e ((6495cd82-783c-40b8-b59a-0668eb7f5b7c)) #card
	  id:: 64eaeffe-d35a-4300-a311-a8092c3b0304
	- ## Proprietà
	  id:: 64eaeffe-3d5c-41b6-a650-fb9050dc94a9
		- Sia $A : X \rightarrow Y$
			- Alternativamente:
				- $A : x = x(t) \in X \rightarrow y = y(t) \in Y$
				- $A : x \rightarrow y$
		- ### Linearità #card
		  id:: 6495cd82-7d09-45ed-bb57-0becdb7682d1
			- $\forall\,x_1, x_2 \in X$
			- $\forall\,\lambda, \mu \in \C$
			- $(\lambda x_1 + \mu x_2)(t) = \lambda x_1(t) + \mu x_2(t) \in X$
			- Se $x_1 \xrightarrow{A} y_1$ e $x_2 \xrightarrow{A} y_2$
				- Ovvero $y_1 = Ax_1$ e $y_2 = Ax_2$
				- Allora quando $A(\lambda x_1 + \mu x_2) = \lambda y_1 + \mu y_2$ dico che il sistema è lineare.
			- Dal punto di vista fisico corrisponde alla sovrapposizione degli effetti.
		- ### Causalità #card
		  id:: 6495cd82-0669-47e2-b342-fad23ec4818e
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
		  id:: 6495cd82-783c-40b8-b59a-0668eb7f5b7c
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
		  id:: 6495cd82-a9f1-4f4d-b03d-607629923f63
			- $x_n \rightarrow x \Rightarrow Ax_n \rightarrow Ax$
			-
			- $A$ è continuo da $(X, \|\ldots\|)$ in $(Y, \|\ldots\|)$ se:
				- $$\underbrace{x_n \rightarrow x \text{ in }(X, \|\ldots\|)}_{\lim_{n \rightarrow \infty} \|x_n - x\|_X = 0} \Rightarrow \underbrace{y_n \rightarrow y \text{ in }(Y, \|\ldots\|)}_{\lim_{n \rightarrow \infty} \|y_n - y\|_Y = 0}$$
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
				  &= \sup_{t \in \R} | \frac{1}{n} \sin(nt) | \\
				  &= \frac{1}{n} \sup_{t \in \R} | \sin(nt) | \\
				  &= \frac{1}{n} \rightarrow 0 \text{ per } n \rightarrow \infty
				  \end{aligned}
				- \begin{aligned}
				  y_n &= Ax_n = x'_n \\
				  &= \cancel{\frac{1}{n}} \cos(nt) \cdot \cancel{n} \\
				  &= \cos(nt)
				  \end{aligned}
					- Per cui $y_n \xcancel{\longrightarrow} 0$ da $\|\ldots\|_\infty$
					- $$\|y_n\|_\infty = \sup_{t \in \R} |\cos(nt)| = 1 \xcancel{\longrightarrow} 0\,\, \forall n$$
					-
				-