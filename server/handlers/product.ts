import { Request, Response } from "express";
import prisma from "../db";

interface RequestWithUser extends Request {
  user: {
    id: string;
  };
}

// Get all
export const getProducts = async (req: RequestWithUser, res: Response) => {
  if (!req.user) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }

const user = await prisma.user.findUnique({
  where: {
    id: req.user.id,
  },
  include: {
    products: true,
  },
});

if (user) {
  res.json({ data: user.products });
} else {
  res.json({ data: [] });
}


// Get one
export const getOneProduct = async (req: RequestWithUser, res: Response) => {
  if (!req.user) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }

  const id = req.params.id;

  const product = await prisma.product.findFirst({
    where: {
      id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
};

// Create one
export const createProduct = async (req: RequestWithUser, res: Response) => {
  if (!req.user) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }

  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
};

// Update one
export const updateProduct = async (req: RequestWithUser, res: Response) => {
  if (!req.user) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }

  const updated = await prisma.product.update({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
    data: {
      name: req.body.name,
    },
  });

  res.json({ data: updated });
};

// Delete one
export const deleteProduct = async (req: RequestWithUser, res: Response) => {
  if (!req.user) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }

  const deleted = await prisma.product.delete({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
  });

  res.json({ data: deleted });
};
