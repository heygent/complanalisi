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
		- > Per $f\in L^2(\R)$ ed $f \in S'(\R)$ , l'integrale $\fint e^{-2πiωt}f(t)\,dt$ non ha in genere senso. Si può tuttavia estendere la definizione di trasformata di Fourier anche a qeusti casi.
		- $$
		  \begin{aligned}
		  ∀ω\in\R:\left| \hat f(ω) \right| &= \l|\fint e^{-2πiωt} f(t)\,dt \r|\\
		  &\le \fint |e^{-2πiωt} f(t)|\,dt\\
		  &=\fint|f(t)|\,dt \\
		  &=\|f\|_{L^1(\R)}
		  \end{aligned}
		  $$
		- $$|\hat f(ω)| \le \| f \|_\L1\R$$
	- Quindi:
		- $$
		   \begin{aligned}
		   \|\hat f \|_{L^∞(\R)} &= \esssup_{ω \in \R} |\hat f(ω)| \\
		   &\le \esssup_{ω \in \R} \|f\|_{L^1(\R)} \\
		   &= \|f\|_{L^1(\R)}
		   \end{aligned}
		  $$
		- id:: 64fd426d-72fb-47a8-85ee-612b1d86ecc3
		  $$\|\hat f\|_\L∞\R \le \| f \|_\L1\R$$
			-
- ## Proprietà #card
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.5
  card-next-schedule:: 2023-09-09T22:00:00.000Z
  card-last-reviewed:: 2023-09-08T22:05:11.650Z
  card-last-score:: 1
	- $\F: f \rightarrow \hat f$ è [lineare](((64f0ed21-ef2f-4428-80d4-1a61c9c2fc60))) su tutti gli spazi vettoriali in cui è definito.
		- $$
		  \begin{aligned}
		  \F[\lambda f_1 + \mu f_2](ω) &= \fint e^{-2πiωt}(λf_1(t) + \mu f_2(t))\,dt \\
		  &=
		  \lambda \fint e^{-2πiωt}f_1(t) + \mu\fint e^{-2πiωt}f_2(t)\,dt \\
		  &=\lambda\F[f_1](ω) + \mu\F[f_2](ω)
		  \end{aligned}
		  $$
	- $\F: \L1\R \rightarrow L^2(\R)$ è un **isomorfismo isometrico**
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
- ## Trasformata come rappresentazione del segnale #card
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
- ## Trasformata della Funzione Caratteristica #card
  id:: 64fb2fc8-4540-488a-8828-fe278b82f85d
	- Calcolare la trasformata di Fourier della ((63d5783c-0a5a-4449-9f80-6e80c87edbfe)):
	- $$
	  χ_{[-a, a]}(t) = \begin{cases} 1&\text{se } t\in [-a, a]\\0&\text{se }t\notin [-a, a] \end{cases}
	  $$
		- con $a > 0$
	- $$
	  \begin{aligned}
	  \F[χ_{[-a, a]}](ω) &= ∫_{-a}^a e^{-2πiωt}\,dt \\
	  &= \left[\frac{e^{-2πiωt}}{-2πiω}\right]^a_{-a} \\
	  &= \frac{e^{-2πiωa} - e^{2πiωa}}{-2πiω} \\
	  \end{aligned}
	  $$
	- Dato che, per la ((64eaeffe-66fa-416d-b2be-a458ea31c68c)) :
		- ((64eaeffe-0fd6-4be4-9dec-30f3e085d02a))
	- $$
	  \begin{aligned}
	  e^{-iθ} - e^{iθ} &=
	  \cos(-θ) + i\sin(-θ) - \cos(θ) - i\sin(θ) \\
	  &=
	  \cancel{\cos(θ)} - i\sin(θ) \cancel{-\cos(θ)} - i\sin(θ) \\
	  &= -2i\sin(θ) \\ \\
	  \frac{e^{-2πiωa} - e^{2πiωa}}{-2πiω} &= \frac{-2i\sin(2πωa)}{-2iπω} \\
	  &= \frac{\sin(2aπω)}{πω} \\
	  &= \sinc_{2a}(ω) \\
	  \end{aligned}
	  $$
	- $$\widehat {χ_{[-a, a]}} = \sinc_{2a}(ω)$$
	- Dove $\sinc$ è il ((64eaeffe-fee4-4d2c-832e-cc123d1739e9))
	  id:: 64fb2fc8-2728-4316-b164-26d8327ff81e
	- Questa trasformata è utile nell'analisi del ((64fb8e55-6062-41e7-83a4-953e54c1921e)) ideale.
- # Altre proprietà #card
	- ### Formula di inversione
	  logseq.order-list-type:: number
	  id:: 64fd2ffa-691e-4b5f-9caf-14b06ee7b5dc
		- Se $f, \hat f \in L^1(\R)$, allora:
		  id:: 64fd2d1a-3c33-4838-8a7f-c0ab01452b7d
		- $$f(t) = \F^{-1}[\hat f](ω) = \fint e^{2πitω} \hat f(ω)\,dω$$
			- q.o. $t \in \R$
			- è la trasformata di Fourier stessa calcolata in $-t$ invece che $t$.
				- $f(t) = \widehat{{\widehat{\,f}}} (-t)$
				  id:: 64fe3e42-64de-43c2-8f60-80faf109adc3
				-
		- $\F: S'(\R) \to S'(\R)$ è un isomorfismo e in particolare una biiezione. Esiste quindi l'inversa $\F^{-1}$:
			- $$f = \F^{-1} \F[f]\quad \forall f \in S'(\R)$$
			- E solo per il caso $f, \hat f \in \L1\R$ l'inversa è uguale all'integrale mostrato sopra.
		- Per interpretazione in teoria dei segnali vedi appendice [(i)](((64fdd17b-2e96-4e94-a7e7-953af6627a8e)))
		-
	- Se $f, \hat f \in L^1(\R)$ allora:
	  logseq.order-list-type:: number
		- $\F^2[f](t) = f(-t)$
			- q.o. $t \in \R$
		- Immediata conseguenza del [punto 1](((64fd2ffa-691e-4b5f-9caf-14b06ee7b5dc)))
		-
	- Se $f, g \in L^2(\R)$ allora:
	  logseq.order-list-type:: number
		- $\widehat{fg} = \hat f * \hat g$
		  logseq.order-list-type:: number
			- Si nota che $f$ e $g$ appartengono a $\LiR$. Infatti:
				- $$
				  \begin{gathered}
				  f,g \in \L2\R \Rightarrow fg \in \L1\R \Rightarrow \widehat{fg} \in \L∞\R \\
				  f,g \in \L2\R \Rightarrow \hat f, \hat g \in \L1\R \Rightarrow \hat f \hat g \in \L∞\R
				  \end{gathered}
				  $$
					- Primo passaggio viene da ((64fb2fc8-5427-4733-b971-33f818818961))
				- Per cui l'uguaglianza si può intendere in $\L∞\R$ (oltre che in $S'(\R)$)
		- $\widehat{f * g} = \hat f \hat g$
		  logseq.order-list-type:: number
			- Valida anche per:
				- $f \in L^2(\R), g \in \L1\R$
				- $f \in \L1\R, g \in \L1\R$
			- $$
			  \begin{aligned}
			  f, g \in \L2\R &\Rightarrow f * g \in \L∞\R &\Rightarrow \widehat{f * g} \in S'(\R) \\
			  f, g \in \L2\R &\Rightarrow \hat f, \hat g \in \L2\R &\Rightarrow \hat f \hat g \in \L1\R
			  \end{aligned}
			  $$
			- $f, g \in \L2\R \Rightarrow f*g \in \L∞\R$ può essere giustificata con [proprietà delle convoluzioni](((64fb2fc8-515d-4731-9de5-6863e8710a6b)))
			- Quindi l'uguaglianza afferma che, per $f,g \in \L2\R$, la distribuzione $\widehat{f * g} \in S'(\R)$ è, in particolare, una funzione che coincide con la funzione $\hat f \hat g \in \L1\R$.