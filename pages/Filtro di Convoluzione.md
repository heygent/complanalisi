tags:: complanalisi

- # Definizione
	- Data una funzione $h: \R \to \C$ diciamo [[Filtro]] di [[Convoluzione]] l'operatore:
		- $A : f \to f*h = Af$
	- Sia $h \in \L1\R$. Allora $A$ è continuo, lineare e invariante per traslazioni:
		- da $\L∞\R$ a $\L∞\R$
		- da $\L2\R$ a $\L2\R$
		- da $\L1\R$ a $\L1\R$
	- ## Dimostrazione
		- ### Linearità
			- Ovvia, dato che $Af$ è definito dall'integrale:
				- ((64fb2fc8-5bd3-459c-8dd0-c676cae9bb95))
		- ###
			- $$A(τ_a f)(t) \stackrel{?}{=} τ_a Af(t)$$
			- $$
			  \begin{aligned}
			  A(τ_a f)(t) &= (τ_af * h)(t) \\
			  &= \fint f((t-s) - a) h(s)\,ds \\
			  &= \fint f((t-a) - s) h(s)\,ds \\
			  &= (f * h)(t -a) \\
			  &= τ_a(f *h )(t) \\
			  &= τ_a Af(t)
			  \end{aligned}
			  $$
		- ### Continuità
			- {{embed ((64f0ed21-c47f-480c-b48e-26df91decd36))}}
			- {{embed ((64fdf0c4-2499-4334-bad4-f472476173c9))}}
			- $$\|f * h\|_\L∞\R \le \|f\|_\L∞\R \|h\|_\L1\R\quad\text{per }f \in \L∞\R$$
			- $$\|f * h\|_\L2\R \le \|f\|_\L2\R \|h\|_\L1\R\quad\text{per }f \in \L2\R$$
			- $$\|f * h\|_\L1\R \le \|f\|_\L1\R \|h\|_\L1\R\quad\text{per }f \in \L1\R$$
-