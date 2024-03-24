import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import sendResponse from '../utils/sendResponse';
import { PackageServices } from '../services/package.service';

const createPackage = catchAsync(async (req, res) => {
  const result = await PackageServices.createPackageFromDB(req.body);

  return sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Package created successfully!',
    data: result,
  });
});

const getAllPackages = catchAsync(async (req, res) => {
  const result = await PackageServices.getAllPackagesFromDB();

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All packages retrieved successfully.',
    data: result,
  });
});

const updatePackage = catchAsync(async (req, res) => {
  const result = await PackageServices.updatePackageFromDB(
    req.params.packageId,
    req.body,
  );

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package updated successfully!',
    data: result,
  });
});

const deletePackage = catchAsync(async (req, res) => {
  const result = await PackageServices.deletePackageFromDB(
    req.params.packageId,
  );

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package deleted successfully!',
    data: result,
  });
});

export const PackageControllers = {
  createPackage,
  getAllPackages,
  updatePackage,
  deletePackage,
};
