# Definizione
	- Siano $f, g: \R \rightarrow \R$ oppure $\C$. Definisco la convoluzione di $f$ e $g$ come:
	- $$(f * g)(t) =\int_{-\infty}^{+\infty} f(t - s) g(s)\,ds$$
	- purché l'integrale esista e sia finito (come integrale nel senso di Lebesgue).
- # Proprietà
	- ##  Commutativa
		- $$(f * g)(x) = (g * f)(x)$$
	- ## Proprietà su norme
		- Se $f, g \in L^1(\R)$, allora $f * g$ esiste ed appartiene a $L^1(\R)$. Inoltre:
			- $$\norm[f*g]{L^1(\R)} \le \norm[f]{L^2(\R)} \norm[g]_{L^1(\R)}$$
		- Se $f\in L^2(\R), g \in L^1(\R)$ allora $f * g$ esiste ed appartiene ad $L^2(\R)$. Inoltre:
			- $$\norm[f*g]_{L^2(\R)} \le \norm[f]_{L^2(\R)} \norm[g]_{L^1(\R)}$$
		- Se $f \in L^\infty(\R), g\in L^1(\R)$ allora $f*g$ e appartiene a $L^\infty(\R)$. Inoltre: $$\|f*g\|_{L^\infty(\R)} \le \|f\|_{L^\infty(\R)}\|g\|_{L^1(\R)}$$
- Più in generale, per $p\in [1, +\infty)$, si definiscono gli spazi:
- $$L^p(I) = \left\{f: I \rightarrow \C \bigg| \int_I |f(t)|^p\,dt < +\infty\right\}$$
- In cui si intendono identificate funzioni che differiscono su insiemi di misura di Lebesgue nulla.
  
  Su $L^p(I)$ si definisce la norma: $$\|f\|_\L{p} = \left(\int_I |f(t)|^p\,dt\right)^\frac{1}{p}$$
  ottenendo spazi di Banach.
  
  Vale la seguente proprietà (di cui le tre proprietà precedenti sono casi particolari):
  
  Se $f \in L^p(\R), g \in L^q(\R)$ con $p, q \in [1, +\infty]$
  Allora $f * g$ è ben definita e appartiene a $L^r(\R)$ con $r \in [1, \infty]$ tale che $\frac{1}{p}+ \frac{1}{q}= 1 + \frac{1}{r}$ (intendendo $\frac{1}{\infty}= 0$).
  Vale inoltre: $$\|f*g\|_{L^r(\R)} \le \|f\|_{L^p(\R)}\|g\|_{L^q(\R)}$$