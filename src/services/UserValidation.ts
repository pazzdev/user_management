import { ObjectSchema } from 'joi';
import * as Joi from 'joi';
import { Request, Response, NextFunction } from "express";

export const ValidatorJoiBody = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(422).json({ error })
    }
  }
}

export const ValidatorJoiQuery = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.query);
      next();
    } catch (error) {
      return res.status(422).json({ error })
    }
  }
}

export const postSchemas = {
  user: Joi.object({
    firstName: Joi.string().trim().max(50).required(),
    lastName: Joi.string().trim().max(50).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }),
    phoneNumber: Joi.number().required(),
  })
} 

export const patchSchemas = {
  user: Joi.object({
    userId: Joi.string().required(),
    firstName: Joi.string().trim().max(50).required(),
    lastName: Joi.string().trim().max(50).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }),
    phoneNumber: Joi.number().required(),
  })
}

export const deleteSchemas = {
  user: Joi.object({
    userId: Joi.string().optional(),
    phoneNumber: Joi.number().optional(),
  })
}