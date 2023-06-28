tags:: complanalisi

- # Definizione #card
	- coppia ordinata $(x, y)$ di numeri reali $x$ e $y$, usualmente rappresentato nella forma $z = x + iy$.
		- $x \in \R$ parte reale
		- $y \in \R$ parte immaginaria
	- $$C = \{z = x + iy : x, y \in \mathbb{R}\}$$
		- $C = \R^2$ insiemisticamente
		- $C \neq \R^2$ algebricamente
- # Operazioni #card
	- Siano:
		- $z_1 = x_1 + iy_1$
		- $z_2 = x_2 + iy_2$:
	- ## Addizione
		- $$\begin{aligned}
		  z_1 + z_2 &= (x_1 + iy_1) + (x_2 + iy_2) \\
		  &= (x_1 + x_2) + i(y_1 + y_2)
		  \end{aligned}$$
		- Corrisponde alla somma di vettori in $\R^2$
	- ## Moltiplicazione per una costante
		- \begin{aligned}\lambda z &= (\lambda x, \lambda y) \\
		  &= \lambda x + i \lambda y
		  \end{aligned}
	- ## Prodotto
		- $$\begin{aligned}
		  z_1 z_2 &= (x_1 + iy_1) (x_2 + iy_2) \\
		  &= (x_1 x_2 - y_1 y_2) + i(x_1 y_2 + y_1 x_2) \\
		  &= (x_1 x_2 - y_1 y_2,\,x_1 y_2 + y_1 x_2) \\
		  \end{aligned}$$
- # Immersione di $\R$ in $\C$
	- $x \in \R \longrightarrow (x, 0) \in \C$
	- {{renderer excalidraw, excalidraw-2023-06-28-11-28-29}}
	- \begin{aligned}
	  x + iy &= (x, 0) + (0, 1)(y, 0) \\
	  &= (x, 0) + (0 \cdot y - 1 \cdot 0, 0 \cdot 0 + y) \\
	  &= (x, y) \\
	  \end{aligned}
- ## Modulo
	- $|z| \triangleq \sqrt{x^2 + y^2}$
	- Per teorema di Pitagora:
		- {{renderer excalidraw, excalidraw-2023-06-28-12-03-44}}
- ## Distanza
	- Siano:
		- $z = z_1 + iz_2$
		- $w = w_1 + iw_2$
	- \begin{aligned}
	  \t{distanza}(z, w) &\triangleq |z - w| \\
	  &= |(z_1 - w_1) + i (z_2 - w_2)| \\
	  &= \sqrt{(z_1 - w_1)^2 + (z_2 - w_2)^2}
	  \end{aligned}
	- $\C = \R^2$ topologicamente
- ## Coordinate polari
	- {{renderer excalidraw, excalidraw-2023-06-28-12-16-07}}
	- $$\begin{cases}
	  \rho &= \sqrt{x^2 + y^2} = |z| \\
	  \Theta &= \arctg \frac{y}{x}
	  \end{cases}
	  \longleftrightarrow
	  \begin{cases}
	  x &= \rho \cos \Theta \\
	  y &= \rho \sin \Theta
	  \end{cases}
	  $$
	-
	-