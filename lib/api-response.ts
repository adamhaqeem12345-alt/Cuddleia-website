import { NextResponse } from 'next/server';

export function successResponse<T>(data: T, status = 200) {
  return NextResponse.json(data, { status });
}

export function errorResponse(message: string, status = 500) {
  return NextResponse.json({ error: message }, { status });
}

export function notFoundResponse(message = 'Resource not found') {
  return errorResponse(message, 404);
}

export function badRequestResponse(message = 'Bad request') {
  return errorResponse(message, 400);
}

export function unauthorizedResponse(message = 'Unauthorized') {
  return errorResponse(message, 401);
}

export function serverErrorResponse(message = 'Internal server error') {
  return errorResponse(message, 500);
}
