tags:: complanalisi

- # Definizione
	- Data una funzione $h: \R \to \C$ diciamo [[Filtro]] di [[Convoluzione]] l'operatore:
		- $A : f \to f*h = Af$
	- Sia $h \in \L1\R$. Allora $A$ è continuo, lineare e invariante per traslazioni:
		- da $\L∞\R$ a $\L∞\R$
		- da $\L2\R$ a $\L2\R$
		- da $\L1\R$ a $\L1\R$
	- ## Dimostrazione
		- ### ((64f0ed21-ef2f-4428-80d4-1a61c9c2fc60))
			- Ovvia, dato che $Af$ è definito dall'integrale:
				- ((64fb2fc8-5bd3-459c-8dd0-c676cae9bb95))
		- ### ((64f0ed21-ca43-460c-bd64-fcf998a8edf2))
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
		- ### ((64f0ed21-4164-4b05-9568-8d7d172e248b))
			- {{embed ((64f0ed21-c47f-480c-b48e-26df91decd36))}}
			- {{embed ((64fdf0c4-2499-4334-bad4-f472476173c9))}}
			- Considerando $c = \|h\|_\L1\R$:
				- $$\|f * h\|_\L∞\R \le \|f\|_\L∞\R \|h\|_\L1\R\quad\text{per }f \in \L∞\R$$
				- $$\|f * h\|_\L2\R \le \|f\|_\L2\R \|h\|_\L1\R\quad\text{per }f \in \L2\R$$
				- $$\|f * h\|_\L1\R \le \|f\|_\L1\R \|h\|_\L1\R\quad\text{per }f \in \L1\R$$
	- ## ((64f19736-5f2a-413d-8e60-1a838fe63067))
		- Visto $A$ come filtro $A: \L∞\R \to \L∞\R$ risulta definita una funzione di trasferimento $H(λ)$ tale che:
			- $$Ae_λ = H(λ)e_λ$$
				- $∀λ\in\R$
				- $e_λ = e_λ(t) = e^{2πiλt}$
		- Da notare che ha senso applicare $A$ ad $e_λ$ perché $e_λ \in \L∞\R$
- # Legame con [[Trasformata di Fourier]]
	-