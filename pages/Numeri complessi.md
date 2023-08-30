tags:: complanalisi

- # Definizione #card
	- Coppia ordinata $(x, y)$ di numeri reali $x$ e $y$, usualmente rappresentato nella forma $z = x + iy$.
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
		  &= (x_1 x_2 - y_1 y_2,\,\,x_1 y_2 + y_1 x_2) \\
		  \end{aligned}$$
		- {{renderer excalidraw, excalidraw-2023-06-30-09-58-06}}
- # Immersione di $\R$ in $\C$
	- $x \in \R \longrightarrow (x, 0) \in \C$
	- \begin{aligned}
	  x + iy &= (x, 0) + (0, 1)(y, 0) \\
	  &= (x, 0) + (0 \cdot y - 1 \cdot 0, 0 \cdot 0 + y) \\
	  &= (x, y) \\
	  \end{aligned}
- ## Modulo
	- $|z| = \sqrt{x^2 + y^2}$
	- Per teorema di Pitagora:
		- {{renderer excalidraw, excalidraw-2023-06-28-12-03-44}}
- ## Distanza
	- Siano:
		- $z_1 = x_1 + iy_1$
		- $z_2 = x_2 + iy_2$
	- \begin{aligned}
	  \t{distanza}(z_1, z_2) &= |z_1 - z_2| \\
	  &= |(x_1 - x_2) + i (y_1 - y_2)| \\
	  &= \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}
	  \end{aligned}
	- Corrisponde con la distanza euclidea.
	- $\C = \R^2$ topologicamente
- # Formula di Eulero #card
	-
	- $$e ^{i \Theta}  = cos \Theta + i \sin \Theta $$
	- Questo permette di riscrivere $z$ come:
		- \begin{aligned}
		  z &= \rho \cos \Theta + i \rho \sin \Theta \\
		  &= \rho (\cos \Theta + i \sin \Theta) \\
		  &= \rho e^{i \Theta}
		  \end{aligned}
		- Più generalmente, se voglio permettere che l'angolo faccia "più giri":
			- $\rho e^{i(\Theta + 2k \pi)}$
		- Notazione conveniente, perché permette di usare le operazioni che solitamente verrebbero usate su esponenziali.
			- \begin{aligned}
			  z_1 \cdot z_2 &=\underbrace{\rho_1 e^{i \Theta_1}}_{z_1}  \cdot \underbrace{\rho_2 e^{i \Theta_2}}_{z_2} \\
			  &= \rho_1 \rho_2 e^{i(\Theta_1 + \Theta_2)}
			  \end{aligned}
		- $$z^n = (\rho e^{i\Theta})^n = \rho^n e^{i\Theta n}$$
- ## Coordinate polari #card
	- {{renderer excalidraw, excalidraw-2023-06-28-12-16-07}}
	- $$\begin{cases}
	  \rho = \sqrt{x^2 + y^2} = |z| \\
	  \Theta = \arctg \frac{y}{x}
	  \end{cases}
	  \quad\longleftrightarrow\quad
	  \begin{cases}
	  x = \rho \cos \Theta \\
	  y = \rho \sin \Theta
	  \end{cases}
	  $$
	- \begin{aligned}
	  \Theta &\in [0, 2\pi) \\
	  \rho &\in [0, + \infty)
	  \end{aligned}
- ## Coniugato
	- \begin{aligned}
	  \bar{z} &\in \C \\
	  \bar{z} &= x - iy
	  \end{aligned}
	- {{renderer excalidraw, excalidraw-2023-06-28-12-49-10}}
	- \begin{aligned}
	  z \bar{z} &= (x + iy)(x - iy) \\
	  &= x^2 \cancel{-ixy + ixy} - i^2y^2 \\
	  &= x^2 + y^2 \\
	  &= |z|^2
	  \end{aligned}
	- Quindi $|z| = \sqrt{z \bar{z}}$
- Si considerano in genere:
	- $f: t \in \R \longrightarrow f(t) \in \C$
		- Ovvero funzioni con immagine complessa.
	- Frequenza pura:
		- $\cos \omega t + i \sin \omega t$
	- Nel caso si vogliano fare derivate occorre considerare che:
		- \begin{aligned}
		  f(t) &= f_1(t) + if_2(t) \\
		  e^{it} &= \underbrace{\cos t}_{f_1(t)} + i \underbrace{\sin t}_{f_2(t)} \\
		  f'(t) &\triangleq f'_1(t) + i f'_2(t) \\
		  \int^b_a f(t)\,dt &= \int_a^b f_1(t)\,dt + i \int_a^b f_2(t)\,dt \\
		  \end{aligned}
	-