tags:: complanalisi

- # Definizione #card
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.5
  card-next-schedule:: 2023-09-09T22:00:00.000Z
  card-last-reviewed:: 2023-09-08T22:44:02.070Z
  card-last-score:: 1
	- Un filtro è un sistema che gode delle proprietà di ((64f0ed21-ef2f-4428-80d4-1a61c9c2fc60)), ((64f0ed21-4164-4b05-9568-8d7d172e248b)) e ((64f0ed21-ca43-460c-bd64-fcf998a8edf2))
	  id:: 64f0ed21-afb3-44dd-aee4-c6ee06624e52
- # Proprietà
	- Sia $A : X \rightarrow Y$
		- Alternativamente:
			- $A : x = x(t) \in X \rightarrow y = y(t) \in Y$
			- $A : x \rightarrow y$
	- ### Linearità #card
	  id:: 64f0ed21-ef2f-4428-80d4-1a61c9c2fc60
	  card-last-interval:: -1
	  card-repeats:: 1
	  card-ease-factor:: 2.5
	  card-next-schedule:: 2023-09-09T22:00:00.000Z
	  card-last-reviewed:: 2023-09-08T22:44:03.681Z
	  card-last-score:: 1
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
	  card-next-schedule:: 2023-09-09T22:00:00.000Z
	  card-last-reviewed:: 2023-09-08T22:44:08.839Z
	  card-last-score:: 1
	  id:: 64f0ed21-ae48-441b-8daf-119dd7f5965d
		- Si vuole formalizzare il fatto che il sistema non anticipa i tempi e risponde al principio di causa-effetto.
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
	  card-last-interval:: -1
	  card-repeats:: 1
	  card-ease-factor:: 2.5
	  card-next-schedule:: 2023-09-09T22:00:00.000Z
	  card-last-reviewed:: 2023-09-08T22:43:53.066Z
	  card-last-score:: 1
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
	  card-last-interval:: -1
	  card-repeats:: 1
	  card-ease-factor:: 2.5
	  card-next-schedule:: 2023-09-09T22:00:00.000Z
	  card-last-reviewed:: 2023-09-08T22:14:08.986Z
	  card-last-score:: 1
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
		- Per dare questo concetto, si usa l'idea di [[Norma]], definita su ognuno degli spazi vettoriali $X$ e $Y$.
		- #### Proprietà
		  id:: 64f0ed21-2f59-46c4-983c-ccb41c8f7ae1
			- $A$ è continuo da $(X, \|\ldots\|)$ in $(Y, \|\ldots\|)$ se e solo se:
				- per ogni $x \in X$ esiste $c > 0$ tale che:
				- $$ \|Ax\|_Y \le c \|x\|_X$$
				- L'output non è più grande dell'input moltiplicato per una costante fissa uguale per tutti gli input.
		- Esempio: il differenziatore non è continuo rispetto a $\|\ldots\|_\infty$
		  collapsed:: true
			- $x(t) \rightarrow x'(t)$
			- da norma infinito a norma infinito
			- si prenda $x_n(t) = \frac1n \sin(nt)$
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
		- ### Esercizio
		  id:: 64f15ffb-33c9-4aae-8a51-585010b6f38a
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2023-09-01 Fri 06:10:27]--[2023-09-01 Fri 06:10:27] =>  00:00:00
		  :END:
			- $$A: x(t) \rightarrow y(t) = \int_{-\infty}^t e^{-(t-s)}x(s)\,ds$$
			- Dimostrare che $A$ è continuo rispetto a $(X, \|\ldots\|_\infty) \rightarrow (Y, \|\ldots\|_\infty)$
			- #### Soluzione
				- {{embed ((64f0ed21-2f59-46c4-983c-ccb41c8f7ae1))}}
				- $$\forall\, x \in X\, \exists\, c > 0 \text{ t.c. } \|Ax\|_\infty \le c \|x\|_\infty?$$
				- \begin{aligned}
				  \sup_{t\in\R}|Ax(t)| &= \sup_t \left|\int_{-\infty}^t e^{-(t-s)}x(s)\,ds \right|\\
				  &\le \sup_t \int_{-\infty}^t \left| e^{-(t-s)}x(s)\, \right| ds \\
				  &= \sup_t \int_{-\infty}^t e^{-(t-s)}|x(s)|\, ds \\
				  &= \sup_t \int_{-\infty}^t e^s e^{-t} |x(s)|\, ds \\
				  &= \sup_t e^{-t} \int_{-\infty}^t e^s \underbrace{|x(s)|}_{\le \|x\|_\infty}\, ds \\
				  &\le \|x\|_\infty \sup_t e^{-t} \int_{-\infty}^t e^s \,ds \\
				  &= \|x\|_\infty \sup_t  e^{-t}\biggl[e^s \biggr]_{-\infty}^t \\
				  &= \|x\|_\infty \sup_t  e^{-t}(e^t - \underbrace{e^{-\infty}}_{=0}) \\
				  &= \|x\|_\infty \sup_t 1 \\
				  &= \|x\|_\infty
				  \end{aligned}
				- Che significa che:
					- $$\|A_x\|_\infty \le \|x\|_\infty$$
				- Cioè $A$ continuo.
- # Funzione di trasferimento #card
  id:: 64f19736-5f2a-413d-8e60-1a838fe63067
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.5
  card-next-schedule:: 2023-09-09T22:00:00.000Z
  card-last-reviewed:: 2023-09-08T22:18:33.551Z
  card-last-score:: 1
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
	- Allora:
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
		- id:: 64fb9097-2231-41b3-8a63-a9dbcdaecce1
		  $$Ae_\lambda(t) = H(\lambda)e_\lambda(t)$$
- # Filtro passa-basso #card
  id:: 64fb8e55-6062-41e7-83a4-953e54c1921e
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.5
  card-next-schedule:: 2023-09-09T22:00:00.000Z
  card-last-reviewed:: 2023-09-08T22:43:49.477Z
  card-last-score:: 1
	- Un filtro che lascia passare solo frequenze basse.
	- Un filtro di questo tipo idealmente ha ((64f19736-5f2a-413d-8e60-1a838fe63067)) del tipo:
	- <iframe class="desmos-graph" src="https://www.desmos.com/calculator/ta8g8wowpg?embed" width="500" height="200" style="border: 1px solid #ccc" frameborder=0></iframe>
	- L'output delle frequenze $\lambda$ fino a $\lambda_C$ non viene cambiato, perché $|H(\lambda)| = 1$.
	- Un filtro con questa funzione di trasferimento non è realizzabile, perché non rispetta la proprietà di ((64f0ed21-ae48-441b-8daf-119dd7f5965d))