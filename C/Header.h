#pragma once
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int affichtab(int tab[10][10], int sizex, int sizey);
int swap(int tab[10][10], int premierx, int premiery, int secondx, int secondy);
bool isWin(int tab[10][10], int sizex, int sizey);
bool isSolvable(int tab[10][10], int sizex, int sizey);
int solveur(int tab[10][10]);
int perftab(int tab[10][10], int nbPilecolored);
int initEmptyCol(int tab[10][10], int nbPileColored, int sizex);
int melangtab(int tab[10][10], int nbcoloredcoll, int colonne);
//int randomtab(int tab[10][10], int sizex, int sizey);

typedef struct pile {
	int maxSize;
	int nbElements;
	int* tab;
}pile;

/*void newpile(pile** s, int initialpileSize);
bool ispileFull(pile* s);
bool ispileEmpty(pile* s);
int push(pile* s, int valeur);
int pull(pile* s, int* valeur);
int peek(pile* s, int* valeur);
int afficherpile(pile* pile);
int perfpile(pile* perfpile,  int nbPiles, int nbPileVides);
int emptypile(int emptycol);*/
//int pilechange(int nbPiles, int nbPilesVides);

