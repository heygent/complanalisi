tags:: complanalisi

- # Definizione #card
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.5
  card-next-schedule:: 2023-09-09T22:00:00.000Z
  card-last-reviewed:: 2023-09-08T22:44:06.883Z
  card-last-score:: 1
	- Siano $f, g: \R \rightarrow \R$ oppure $\C$. Definisco la convoluzione di $f$ e $g$ come:
	- id:: 64fb2fc8-5bd3-459c-8dd0-c676cae9bb95
	  $$(f * g)(t) =\int_{-\infty}^{+\infty} f(t - s) g(s)\,ds$$
	- purché l'integrale esista e sia finito (come integrale nel senso di Lebesgue).
- # Proprietà #card
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.5
  card-next-schedule:: 2023-09-09T22:00:00.000Z
  card-last-reviewed:: 2023-09-08T22:37:49.129Z
  card-last-score:: 1
	- ##  Commutativa
		- $$(f * g)(x) = (g * f)(x)$$
	- ## Proprietà su norme
		- Se $f, g \in L^1(\R)$, allora $f * g$ esiste ed appartiene a $L^1(\R)$. Inoltre:
		  logseq.order-list-type:: number
			- $$\|f*g\|_{L^1(\R)} \le \|f\|_{L^2(\R)} \|g\|_{L^1(\R)}$$
		- Se $f\in L^2(\R), g \in L^1(\R)$ allora $f * g$ esiste ed appartiene ad $L^2(\R)$. Inoltre:
		  logseq.order-list-type:: number
			- $$\|f*g\|_{L^2(\R)} \le \|f\|_{L^2(\R)} \|g\|_{L^1(\R)}$$
		- Se $f \in L^\infty(\R), g\in L^1(\R)$ allora $f*g$ e appartiene a $L^\infty(\R)$. Inoltre:
		  logseq.order-list-type:: number
			- $$\|f*g\|_{L^\infty(\R)} \le \|f\|_{L^\infty(\R)}\|g\|_{L^1(\R)}$$
		- ### Generalizzazione
		  id:: 64fb2fc8-515d-4731-9de5-6863e8710a6b
			- Per $p\in [1, +\infty)$, si definiscono gli spazi:
				- $$L^p(I) = \left\{f: I \rightarrow \C \bigg| \int_I |f(t)|^p\,dt < +\infty\right\}$$
			- In cui si intendono identificate funzioni che differiscono su insiemi di misura di Lebesgue nulla.
			- Su $L^p(I)$ si definisce la norma:
				- $$\|f\|_{L^p(I)} = \left(\int_I |f(t)|^p\,dt\right)^\frac{1}{p}$$
				- ottenendo spazi di Banach.
			- Vale la seguente proprietà (di cui le tre proprietà precedenti sono casi particolari):
				- Siano $p,q,r \in [1, +∞]$ tali che:
					- $$\frac1p + \frac1q = \frac1r + 1$$
				- Se $f \in L^p(\R)$, $g \in L^q(\R)$ allora $f * g$ è ben definita e appartiene a $L^r(\R)$.
				- Vale inoltre:
					- id:: 64fde8dd-149c-4829-ae0b-ffd9f6a128f2
					  $$\|f*g\|_{L^r(\R)} \le \|f\|_{L^p(\R)}\|g\|_{L^q(\R)}$$