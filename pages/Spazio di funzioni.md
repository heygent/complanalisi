# Spazi di funzioni #card
id:: 64eaeffe-3968-42cb-9047-566bc2b5b37b
	- $X$ è uno spazio vettoriale di funzioni
		- Date due funzioni $x_1(t) \in X$ e $x_2(t) \in X$ sono definite
			- somma
				- $(x_1 + x_2)(t) = x_1(t) + x_2(t)$
			- prodotto per uno scalare
				- $(k x_1)(t) = kx_1(t) \quad \forall\, k \in \mathbb{R} \text{ oppure } \mathbb{C}$
	- $X : I \subseteq \mathbb{R} \rightarrow \mathbb{R} \text{ oppure } \mathbb{C}$
		- Ad esempio $I$ può essere $\mathbb{R}, (a, b), (a, +\infty), \ldots$
	- ## Norma
	  id:: 64ef30fb-b59c-4905-8565-25f72859cd0f
		- In uno spazio di funzioni il concetto di limite è spesso definito in termini di una norma $\|\cdot\|$ definita su ognuno degli spazi vettoriali.
		- Utile per definire la distanza tra due funzioni:
			- $$\text{dist}(x_, x_2) = \|x_1 - x_2 \|$$
		- $x_n \rightarrow x$ significa che $\lVert x_n - x \rVert = 0$
			- è necessario specificare rispetto a quale norma
		- Ci sono tre norme principalmente usate:
			- ### Norma infinito
			  id:: 64ee8341-d445-4da3-b2e1-0ba6d6bc2967
				- id:: 64ee834f-4c1c-4038-9db4-557425915680
				  $$\|x\|_\infty = \sup_{t\in I} |x(t)|$$
				- Definisce la convergenza uniforme
			- ### Norma 1
			  id:: 64ee8373-4033-47ed-a6b4-0cca8ea5fc11
				- id:: 64ee83d8-fbfc-489a-8e4b-641a5c80cd58
				  $$\|x\|_1 = \int_I |x(t)|\,dt$$
				- Definisce la convergenza media
			- ### Norma 2
				- id:: 64ee8414-006b-4ef4-8db5-bd9ff5c961f8
				  $$\|x\|_2 = \left( \int_I |x(t)|^2\,dt \right)^{\frac{1}{2}}$$
				- Rappresenta l'energia del segnale
				- Deriva da un prodotto scalare tra funzioni.
					- $$(x, y)_2 = \int_I x(t)\bar{y}(t)\,dt$$
						- $\bar{y}(t)$ è il complesso coniugato di $y(t)$
					- \begin{aligned}
					  (x, x) &= \int_I x(t) \bar{x}(t)\,dt \\
					  &= \int_I |x(t)|^2\,dt
					  \end{aligned}
						- che è il quadrato della norma.
						- $\|x\|_1 = \sqrt{(x, x)}$
		- La distanza può variare molto in base alla norma usata.
			- {{renderer excalidraw, excalidraw-2023-08-30-01-57-41}}
				- In questo caso, la distanza usando la norma infinito è alta mentre quella usando norma 1 è bassa.
		- ### Convergenza puntuale
			- Si dice che $x_n \rightarrow x$ puntualmente se
				- $$\lim_{n \rightarrow \infty} x_n(t) = x(t)\quad\forall\, t \in I$$
		- ## Caso discreto
			- Quando il segnale è discreto, si possono usare le norme analoghe:
				- $$\|x\|_\infty = \sup_{t\in I} |x(t)|$$
				- $$\|x\|_1 = \sum_{n = -\infty}^{+\infty} |x_n|$$
				- $$\|x\|_2 = \left( \sum_{n = -\infty}^{+\infty} |x_n|^2 \right)^{\frac{1}{2}}$$
			- $x^{(n)} \rightarrow x$ in $(X, \|\cdot\|_\infty)$ significa che:
				- $\|x^{(n)} - x\| \rightarrow 0$
				- $\|x^{(n)} - x\| = \sup_{k \in \Z} |x_k^{(n)} - x_k|$