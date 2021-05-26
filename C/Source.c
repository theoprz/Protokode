#include "Header.h"
#define STACKOVERFLOW -1

int main() {

	int colonne = 0;
	int colempty = 0;
	pile* pile;


	do {
		printf(" Entrez le nombre de colonne (max 10): ");
		scanf_s("%d", &colonne);

	} while (colonne < 2);

	if (colonne < 7 && colonne >= 5) {
		colempty = 2;
	}
	else if (colonne >= 7) {
		colempty = 3;
	}
	else {
		colempty = 1;
	}

	printf("Il y aura %d fioles vides \n", colempty);
	
	
	perfpile(colonne, colempty);
	emptypile(colempty);



	/*srand(time(NULL));

	int tmp = 0;
	int tab[10][10];
	int ligne = 4;
	int colonne;
	int i = 0;
	int j = 0;
	bool solvable = true;

	do {
		printf(" Entrez le nombre de colonne (max 10): ");
		scanf_s("%d", &colonne);

	} while (colonne < 4);
	
		if (colonne > 4)
			printf("Il y a 2 flacons vides\n");
		else
			printf("Il y a 1 flacon vide\n");

		printf(" Le nombre de liquides est : %d\n", ligne);
		printf(" Le nombre de flacons est : %d\n", colonne);

		printf(" Le tableau 2D = \n");

		randomtab(tab, ligne, colonne);
		affichtab(tab, ligne, colonne);

		solvable = isSolvable(tab, ligne, colonne);

		while (solvable == false) {
			printf("Solution impossible, nouveau tableau : \n");
			randomtab(tab, ligne, colonne);
			affichtab(tab, ligne, colonne);
		}		

	while (isWin(tab, ligne, colonne) == false) {

		if (isWin(tab, ligne, colonne)) {
			printf("Gagne !\n");
			return 0;
		}
		else {
			printf("perdu ! modifie quelque chose \n");
			printf("Deplacement d'un nombre dans un autre tube : \n");

			swap(tab);

			printf("Le nouveau tableau en 2D =\n ");

			affichtab(tab, ligne, colonne);
		}
	}
	printf("C'est gagne !");*/

}

int swap(int tab[10][10]) {

	int tmp = 0;
	int premierx, premiery;
	int secondx, secondy;

	printf("Choisissez un x  \n");
	scanf_s("%d", &premierx);	
	printf("Choisissez un y \n");
	scanf_s("%d", &premiery);

	printf("Choisissez un x a remplacer \n");
	scanf_s("%d", &secondx);
	printf("Choisissez un y a remplacer \n");
	scanf_s("%d", &secondy);

	
	tmp = tab[premierx][premiery];
	tab[premierx][premiery] = tab[secondx][secondy];
	tab[secondx][secondy] = tmp;


	return 0;
}

int affichtab(int tab[10][10], int sizex, int sizey) {
	for (int i = 0; i < sizex; i++) {
		for (int j = 0; j < sizey; j++) {
			printf("%4d", tab[i][j]);
		}
		printf("\n");
	}

	return 0;
}

/*int randomtab(int tab[10][10], int sizex, int sizey) {
	int tmp[10] = { 0 };
	int nbColColored = sizey - emptycol(sizey);
	for (int i = 0; i < 4; i++) {
		for (int j = 0; j < nbColColored; j++) {
			tab[i][j] = rand() % sizey;
		}
	}
	return 0;
}*/



bool isWin(int tab[10][10], int sizex, int sizey) {

	int tmp = 0;
	bool success = true;

	for (int i = 0; i < sizex; i++) {
		for (int j = 0; j < 4; j++) {
			if (j == 0) {
				tmp = tab[j][i];
			}
			if (tab[j][i] != tmp) {
				success = false;
			}
		}
	}
	return success;
}

int random_number(int min_num, int max_num)
{
	int result = 0, low_num = 0, hi_num = 0;

	if (min_num < max_num)
	{
		low_num = min_num;
		hi_num = max_num + 1;
	}
	else {
		low_num = max_num + 1;
		hi_num = min_num;
	}

	srand(time(NULL));
	result = (rand() % (hi_num - low_num)) + low_num;
	return result;
}

bool isSolvable(int tab[10][10], int sizex, int sizey) {
	int success;
	int tmp[10] = { 0 };
	int i, j;
	
			if (sizex <= sizey) {
				
				for (i = 0; i < sizex; i++) {
					for (j = 0; j < sizey; j++) {
						if (tab[i][j] != 0) {
							//printf(" tab i j = %d\n", tab[i][j]);
							tmp[tab[i][j] - 1] = tmp[tab[i][j]-1] + 1;
						}
					}
				}
				for (i = 0; i < 10; i++) {
					printf("%d\n", tmp[i]);
					if (tmp[i] % 4 == 0) {
						success = true;
					}
					else {
						success = false;
						return success;
					}
				}
			}
			else {
				success = false;
			}
	return success;
}

int solveur(int tab[10][10]) {



	return 0;
}

bool isFull(int tab[10][10], int pos) {
	if (tab[pos][0]) {
		printf("La colonne n'est pas pleine \n");
		return false;
	}
	else {
		printf("La colonne est pleine \n");
		return true;
	}
}

int emptypile(int emptycol) {

	pile* pilevide;

	for (int i = 0; i < emptycol; i++) {
		newpile(&pilevide, 4);
		afficherpile(pilevide);
	}

	return 0;
}

int perfpile(int nbPiles, int nbPileVides) {
	int val = 0;
	pile* pile;
	int coloredstack = nbPiles - nbPileVides;
	
	for (int i = 0; i < coloredstack; i++) {
		newpile(&pile, 4);
		val++;
		for (int j = 0; j < 4; j++) {
			push(pile, val);
		}
		afficherpile(pile);	
	}
	return 0;
}

void newpile(pile** s, int initialpileSize) {
	*s = (pile*)malloc(sizeof(pile));
	if (*s != NULL) {
		(*s)->tab = (int*)malloc(initialpileSize * sizeof(int));
		if (((*s)->tab) != NULL) {
			(*s)->maxSize = initialpileSize;
			(*s)->nbElements = 0;
		}
		else {
			free(*s);
			*s = NULL;
		}
	}
}

bool ispileFull(pile* s) { // Si la pile est pleine
	return (s->nbElements >= s->maxSize);
}

bool ispileEmpty(pile* s) { // Si la pile est vide
	return (s->nbElements == 0);
}

int push(pile* s, int valeur) { // On ajoute une valeur
	if (!ispileFull(s)) {
		s->tab[s->nbElements] = valeur;
		s->nbElements++;
		return  0;
	}
	else {
		return STACKOVERFLOW ;
	}
}

int pull(pile* s, int* valeur) { // On retir la dernière valeur de la pile
	if (!ispileEmpty(s)) {
		*valeur = s->tab[s->nbElements - 1];
		s->nbElements--;
		return EXIT_SUCCESS;
	}
	return EXIT_FAILURE;
}

int peek(pile* s, int* valeur) {  // On récupére la dernière valeur de la pile
	if (!ispileEmpty(s)) {
		*valeur = s->tab[s->nbElements - 1];
		return EXIT_SUCCESS;
	}
	return EXIT_FAILURE;
}

int afficherpile(pile* pile) {
	int val = 0;
	int tab[4] = { 0 };

	if (pile == NULL)
	{
		return EXIT_FAILURE;
	}

	for (int i = 0; i < 4; i++) {
		pull(pile, &val);
		tab[i] = val;
		printf("%d \n", tab[i]);
	}

	printf("\n");

	return EXIT_SUCCESS;
}

