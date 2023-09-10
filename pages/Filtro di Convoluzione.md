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
		- ### Invarianza per traslazioni
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
			- ((64fde8dd-149c-4829-ae0b-ffd9f6a128f2))
			-
-