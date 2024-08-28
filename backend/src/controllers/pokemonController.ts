import { Request, Response } from 'express';
import { checkPrime, fibonacci } from '../services/pokemonService';

export const catchPokemon = (req: Request, res: Response) => {
  const success = Math.random() < 0.5;
  res.json({ success });
};

export const releasePokemon = (req: Request, res: Response) => {
  const number = Math.floor(Math.random() * 100);
  const isPrime = checkPrime(number);
  res.json({ success: isPrime, number });
};

export const renamePokemon = (req: Request, res: Response) => {
  const { name, timesRenamed } = req.body;
  const newName = `${name}-${fibonacci(timesRenamed)}`;
  res.json({ newName });
};
