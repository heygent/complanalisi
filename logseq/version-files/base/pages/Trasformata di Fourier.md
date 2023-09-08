tags:: complanalisi

- # Definizione
	- Sia $f: \R \rightarrow \C$, chiamiamo **trasformata di Fourier** di $f$ la funzione:
	- $$\hat{f}(ω) = ∫_{-∞}^{+∞} e^{-2πitω}f(t)\,dt$$
	- dipendente dalla variabile $ω \in \R$ ogni volta che l'integrale ha senso (di Lebesgue).
	- L'operatore che associa $\hat f$ a $f$ viene indicato con $\F$ , scrivendo quindi:
		- $$\F: f \rightarrow \hat f$$
		- $$\hat f(ω) = \F [f](ω)$$
	- La trasformata di Fourier è ben definita per $f \in L^1(\R)$:
		- $$
		  \begin{aligned}
		  ∀ω\in\R:\left| \hat f(ω) \right| &= \l|\fint e^{-2πiωt} f(t)\,dt \r|\\
		  &\le \fint |e^{-2πiωt} f(t)|\,dt\\
		  &=\fint|f(t)|\,dt \\
		  &=\|f\|_{L^1(\R)}
		  \end{aligned}
		  $$
	- Quindi:
	  $$
	   \begin{aligned}
	   \|\hat f \|_{L^∞(\R)} &= \esssup_{ω \in \R} |\hat f(ω)| \\
	   &\le \esssup_{ω \in \R} \|f\|_{L^1(\R)} \\
	   &= \|f\|_{L^1(\R)}
	   \end{aligned}
	  $$
		- La norma ∞ è <= della norma L1 di f.
	- > Per $f\in L^2(\R)$ ed $f \in S'(\R)$ , l'integrale $\fint e^{-2πiωt}f(t)\,dt$ non ha in genere senso. Si può tuttavia estendere la definizione di trasformata di Fourier anche a qeusti casi.
- ## Proprietà
	- $\F: f \rightarrow \hat f$ è lineare su tutti gli spazi vettoriali in cui è definito.
		- $$
		  \begin{aligned}
		  \F[\lambda f_1 + \mu f_2](ω) &= \fint e^{-2πiωt}(λf_1(t) + \mu f_2(t))\,dt \\
		  &=
		  \lambda \fint e^{-2πiωt}f_1(t) + \mu\fint e^{-2πiωt}f_2(t)\,dt \\
		  &=\lambda\F[f_1](ω) + \mu\F[f_2](ω)
		  \end{aligned}
		  $$
	- $\F: L^1(\R) \rightarrow L^2(\R)$ è un **isomorfismo isometrico**
	- $\F: S'(\R) \rightarrow S'(\R)$ è una **biiezione lineare bicontinua**
	- **Uguaglianza di Plancherel**
		- $$\| f \|_{L^2(\R)} = \| \hat f\|_{L^2(\R)}$$
		- esprime "conservazione dell'energia" del segnale
		- Più specificamente un segnale è un fenomeno fisico che può essere rappresentato:
			- in funzione del tempo da $f(t)$
			- in funzione delle frequenze da $\hat f(t)$
		- È quindi lecito aspettarsi che $f$ ed $\hat f$, che rappresentano lo steso fenomeno, abbiano associata la stessa energia
- ## Trasformata come rappresentazione del segnale
	- L'interpretazione di $\hat f(ω)$ come rappresentazione del segnale rispetto alle frequenze si basa sulle seguenti proprietà.
	- $\hat 1 = δ$ e $\hat δ = 1$
		- La trasformata della funzione 1 costante è un delta di Dirac, e viceversa
	- $∀ϕ\in S'(\R)$:
		- $\F[\tau_a ϕ] = \mu_{-a}\hat ϕ$
		  logseq.order-list-type:: number
			- $$
			  \begin{aligned}
			  \F[τ_a ϕ](ω) &= \fint e^{-2πiωt} ϕ(t-a)\,dt\\
			  &= \fint e^{-2πiω(s+a)} ϕ(s)\,ds \\
			  &= e^{-2πiωa} \fint e^{-2πiωs} ϕ(s)\,ds\\
			  &= (\mu_{-a} \hatϕ)(ω)
			  \end{aligned}
			  $$
		- $\F[\mu_a ϕ] = τ_a \hat ϕ$
		  logseq.order-list-type:: number
			- Analogo al caso uno con $ϕ \in L'(\R)$
	- $\F[e^{2πiat}] = δ_a$
		- La frequenza pura $e_a$ è uguale al Delta di Dirac centrato in $a$
	- $\F[e^{2πiat}] = \F[\mu_a 1] = \tau_a \hat 1 = τ_aδ = δ_a$
		- Questa proprietà e la ((64eaeffe-66fa-416d-b2be-a458ea31c68c)) permettono di calcolare facilmente la trasformata di Fourier delle funzioni $\sin(2πat)$ e $\cos(2πat)$
		- > Questa proprietà mostra che la trasformata di Fourier "individua" la frequenza pura $a \in \R$ del segnale $e^{2πiat}$ associando a tale segnale una Delta di Dirac $δ_a$ centrata nel punto $ω = a$
	- ### Conseguenza
		- Per la linearità di $\F$, la trasformata di Fourier di un segnale che contiene le frequenze $λ_1, …, λ_n$, sarà:
			- $$
			  \begin{aligned}
			  f(t) &= \sum^N_{k=1} c_k e^{eπiλkt} \\
			  \hat f(ω) &= \sum_{k=1}^N c_k δ_{λ_k}
			  \end{aligned}
			  $$
			- ((64fb2603-61fc-4c7a-ad22-52f4fef941ef))
	- ### Esercizio
		- Calcolare la trasformata di Fourier della funzione:
		- $$
		  χ_{[-a, a]}(t) = \begin{cases} 1&\text{se } t\in [-a, a]\\0&\text{se }t\notin [-a, a] \end{cases}
		  $$
			- con $a > 0$
		-
		-