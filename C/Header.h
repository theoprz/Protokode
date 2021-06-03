#pragma once
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <time.h>
#include <json-c/json.h>

typedef struct list
{
	int size;
	int sizeEmpty;
	int color;
	int index;
} list;

int affichtab(int tab[10][10], int sizex, int sizey);
int swap(int tab[10][10], int premierx, int premiery, int secondx, int secondy);
bool isWin(int tab[10][10], int sizex, int sizey);
bool isSolvable(int tab[10][10], int sizex, int sizey);
int perftab(int tab[10][10], int nbPilecolored);
int initEmptyCol(int tab[10][10], int nbPileColored, int sizex);
int melangtab(int tab[10][10], int nbcoloredcoll, int colonne);
bool translate(int tab[10][10], int nbFlasks, int x, int X);
bool translateCheat(int tab[10][10], int nbFlasks, int x, int X, int nbMove);
bool solve(int tab[10][10], int nbFlasks);
list *updateFull(int tab[10][10], list full[10], int nbFlasks);
void Swap(list *xp, list *yp);
void delay(int number_of_seconds);
	//int randomtab(int tab[10][10], int sizex, int sizey);

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
