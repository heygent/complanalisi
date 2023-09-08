tags:: complanalisi

- # Norma
	- In uno spazio di funzioni il concetto di limite è spesso definito in termini di una norma $\|\cdot\|$ definita su ognuno degli spazi vettoriali.
	- Utile per definire la distanza tra due funzioni:
		- $$\text{dist}(x_, x_2) = \|x_1 - x_2 \|$$
	- $x_n \rightarrow x$ significa che $\lVert x_n - x \rVert = 0$
		- (è necessario specificare rispetto a quale norma).
	- Ci sono tre norme principalmente usate:
		- ### Norma infinito
			- $$\|x\|_\infty = \sup_{t\in I} |x(t)|$$
			- Definisce la convergenza uniforme
		- ### Norma 1
			- $$\|x\|_1 = \int_I |x(t)|\,dt$$
			- Definisce la convergenza media
		- ### Norma 2
			- $$\|x\|_2 = \left( \int_I |x(t)|^2\,dt \right)^{\frac{1}{2}}$$
			- Rappresenta l'energia del segnale.
			- Deriva da un prodotto scalare tra funzioni.
				- $$(x, y)_2 = \int_I x(t)\bar{y}(t)\,dt$$
				- $\bar{y}(t)$ è il complesso coniugato di $y(t)$:
				- $$
				  \begin{aligned}
				  (x, x) &= \int_I x(t) \bar{x}(t)\,dt \\
				  &= \int_I |x(t)|^2\,dt
				  \end{aligned}
				  $$
				- che è il quadrato della norma:
				- $\|x\|_1 = \sqrt{(x, x)}$
			- La distanza può variare molto in base alla norma usata.
			-
			- In questo caso, la distanza usando la norma infinito è alta mentre quella usando norma 1 è bassa.
- ### Convergenza puntuale
	- Si dice che $x_n \rightarrow x$ puntualmente se
		- $$\lim_{n \rightarrow \infty} x_n(t) = x(t)\quad\forall\, t \in I$$
- ## Caso discreto
  
  Quando il segnale è discreto, si possono usare le norme analoghe:
  
  $$
  \begin{aligned}
  \|x\|_\infty &= \sup_{t\in I} |x(t)| \\
  \|x\|_1 &= \sum_{n = -\infty}^{+\infty} |x_n| \\
  \|x\|_2 &= \left( \sum_{n = -\infty}^{+\infty} |x_n|^2 \right)^{\frac{1}{2}}
  \end{aligned}
  $$
  
  
  $x^{(n)} \rightarrow x$ in $(X, \|\cdot\|_\infty)$ significa che:
  
  $$
  \begin{aligned}
  \|x^{(n)} - x\| &\rightarrow 0 \\
  \|x^{(n)} - x\| &= \sup_{k \in \Z} |x_k^{(n)} - x_k|
  \end{aligned}
  $$