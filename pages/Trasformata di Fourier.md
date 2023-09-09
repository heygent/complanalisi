tags:: complanalisi

- # Definizione #card
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.5
  card-next-schedule:: 2023-09-09T22:00:00.000Z
  card-last-reviewed:: 2023-09-08T22:24:12.441Z
  card-last-score:: 1
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
- ## Proprietà #card
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.5
  card-next-schedule:: 2023-09-09T22:00:00.000Z
  card-last-reviewed:: 2023-09-08T22:05:11.650Z
  card-last-score:: 1
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
- ## Uguaglianza di Plancherel #card
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.5
  card-next-schedule:: 2023-09-09T22:00:00.000Z
  card-last-reviewed:: 2023-09-08T22:44:00.169Z
  card-last-score:: 1
	- $$\| f \|_{L^2(\R)} = \| \hat f\|_{L^2(\R)}$$
	- esprime "conservazione dell'energia" del segnale
	- Più specificamente un segnale è un fenomeno fisico che può essere rappresentato:
		- in funzione del tempo da $f(t)$
		- in funzione delle frequenze da $\hat f(t)$
	- È quindi lecito aspettarsi che $f$ ed $\hat f$, che rappresentano lo steso fenomeno, abbiano associata la stessa energia
- ## Trasformata come rappresentazione del segnale
	- L'interpretazione di $\hat f(ω)$ come rappresentazione del segnale rispetto alle frequenze si basa sulle seguenti proprietà.
	- $∀ϕ\in S'(\R)$:
		- $\hat 1 = δ$ e $\hat δ = 1$
		  logseq.order-list-type:: number
			- La trasformata della funzione 1 costante è un ((64fb2fc8-5728-4097-9f3b-b84a5e13e869)), e viceversa
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
			- Analogo al caso precedente con $ϕ \in L'(\R)$
		- $\F[e^{2πiat}] = δ_a$
		  logseq.order-list-type:: number
			- La frequenza pura $e_a$ è uguale al ((64fb2fc8-5728-4097-9f3b-b84a5e13e869)) centrato in $a$
			- Spiegazione:
			- $\F[e^{2πiat}] = \F[\mu_a 1] = \tau_a \hat 1 = τ_aδ = δ_a$
			- Questa proprietà e la ((64eaeffe-66fa-416d-b2be-a458ea31c68c)) permettono di calcolare facilmente la trasformata di Fourier delle funzioni $\sin(2πat)$ e $\cos(2πat)$
			- > Questa proprietà mostra che la trasformata di Fourier "individua" la frequenza pura $a \in \R$ del segnale $e^{2πiat}$ associando a tale segnale una Delta di Dirac $δ_a$ centrata nel punto $ω = a$
	- ### Conseguenza
		- Per la linearità di $\F$, la trasformata di Fourier di un segnale che contiene le frequenze $λ_1, …, λ_n$, sarà:
			- $$
			  \begin{aligned}
			  f(t) &= \sum^N_{k=1} c_k e^{2πiλ_kt} \\
			  \hat f(ω) &= \sum_{k=1}^N c_k δ_{λ_k}
			  \end{aligned}
			  $$
			- Sarà quindi la somma dei $c_k$ moltiplicati per $δ$
			- ((64fb2603-61fc-4c7a-ad22-52f4fef941ef))
	- ### Esercizio
		- Calcolare la trasformata di Fourier della ((63d5783c-0a5a-4449-9f80-6e80c87edbfe)):
		- $$
		  χ_{[-a, a]}(t) = \begin{cases} 1&\text{se } t\in [-a, a]\\0&\text{se }t\notin [-a, a] \end{cases}
		  $$
			- con $a > 0$
		- $$
		  \begin{aligned}
		  \F[χ_{[-a, a]}](ω) &= ∫_{-a}^a e^{-2πiωt}\,dt \\
		  &= \left[\frac{e^{-2πiωt}}{-2πiω}\right]^a_{-a} \\
		  &= \frac{e^{2πiωa} - e^{-2πiωa}}{-2πiω} \\
		  \end{aligned}
		  $$
		- Dato che, per la ((64eaeffe-66fa-416d-b2be-a458ea31c68c)) :
			- ((64eaeffe-0fd6-4be4-9dec-30f3e085d02a))
			- $$
			  \begin{aligned}
			  e^{iθ} - e^{-iθ} &=
			  \cos(θ) + i\sin(θ) - \cos(-θ) - i\sin(-θ) \\
			  &=
			  \cos(θ) +i\sin(θ) + \cos(θ) - i\sin(θ)
			  \end{aligned}
			  $$
		- $$
		  \begin{aligned}
		  &= \frac{\sin(2aπω)}{πω} \\
		  &= \sinc_{2a}(ω) \\
		  \end{aligned}
		  $$
		- La funzione $\sinc$ è detta **seno cardinale**
		- Questa trasformata è utile nell'analisi del filtro passa-basso ideale.