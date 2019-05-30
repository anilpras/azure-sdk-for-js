/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/computeNodeOperationsMappers";
import * as Parameters from "../models/parameters";
import { BatchServiceClientContext } from "../batchServiceClientContext";

/** Class representing a ComputeNodeOperations. */
export class ComputeNodeOperations {
  private readonly client: BatchServiceClientContext;

  /**
   * Create a ComputeNodeOperations.
   * @param {BatchServiceClientContext} client Reference to the service client.
   */
  constructor(client: BatchServiceClientContext) {
    this.client = client;
  }

  /**
   * You can add a user account to a node only when it is in the idle or running state.
   * @summary Adds a user account to the specified compute node.
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the machine on which you want to create a user account.
   * @param user The user account to be created.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeAddUserResponse>
   */
  addUser(poolId: string, nodeId: string, user: Models.ComputeNodeUser, options?: Models.ComputeNodeAddUserOptionalParams): Promise<Models.ComputeNodeAddUserResponse>;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the machine on which you want to create a user account.
   * @param user The user account to be created.
   * @param callback The callback
   */
  addUser(poolId: string, nodeId: string, user: Models.ComputeNodeUser, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the machine on which you want to create a user account.
   * @param user The user account to be created.
   * @param options The optional parameters
   * @param callback The callback
   */
  addUser(poolId: string, nodeId: string, user: Models.ComputeNodeUser, options: Models.ComputeNodeAddUserOptionalParams, callback: msRest.ServiceCallback<void>): void;
  addUser(poolId: string, nodeId: string, user: Models.ComputeNodeUser, options?: Models.ComputeNodeAddUserOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.ComputeNodeAddUserResponse> {
    return this.client.sendOperationRequest(
      {
        poolId,
        nodeId,
        user,
        options
      },
      addUserOperationSpec,
      callback) as Promise<Models.ComputeNodeAddUserResponse>;
  }

  /**
   * You can delete a user account to a node only when it is in the idle or running state.
   * @summary Deletes a user account from the specified compute node.
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the machine on which you want to delete a user account.
   * @param userName The name of the user account to delete.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeDeleteUserResponse>
   */
  deleteUser(poolId: string, nodeId: string, userName: string, options?: Models.ComputeNodeDeleteUserOptionalParams): Promise<Models.ComputeNodeDeleteUserResponse>;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the machine on which you want to delete a user account.
   * @param userName The name of the user account to delete.
   * @param callback The callback
   */
  deleteUser(poolId: string, nodeId: string, userName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the machine on which you want to delete a user account.
   * @param userName The name of the user account to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteUser(poolId: string, nodeId: string, userName: string, options: Models.ComputeNodeDeleteUserOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteUser(poolId: string, nodeId: string, userName: string, options?: Models.ComputeNodeDeleteUserOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.ComputeNodeDeleteUserResponse> {
    return this.client.sendOperationRequest(
      {
        poolId,
        nodeId,
        userName,
        options
      },
      deleteUserOperationSpec,
      callback) as Promise<Models.ComputeNodeDeleteUserResponse>;
  }

  /**
   * This operation replaces of all the updatable properties of the account. For example, if the
   * expiryTime element is not specified, the current value is replaced with the default value, not
   * left unmodified. You can update a user account on a node only when it is in the idle or running
   * state.
   * @summary Updates the password and expiration time of a user account on the specified compute
   * node.
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the machine on which you want to update a user account.
   * @param userName The name of the user account to update.
   * @param nodeUpdateUserParameter The parameters for the request.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeUpdateUserResponse>
   */
  updateUser(poolId: string, nodeId: string, userName: string, nodeUpdateUserParameter: Models.NodeUpdateUserParameter, options?: Models.ComputeNodeUpdateUserOptionalParams): Promise<Models.ComputeNodeUpdateUserResponse>;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the machine on which you want to update a user account.
   * @param userName The name of the user account to update.
   * @param nodeUpdateUserParameter The parameters for the request.
   * @param callback The callback
   */
  updateUser(poolId: string, nodeId: string, userName: string, nodeUpdateUserParameter: Models.NodeUpdateUserParameter, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the machine on which you want to update a user account.
   * @param userName The name of the user account to update.
   * @param nodeUpdateUserParameter The parameters for the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateUser(poolId: string, nodeId: string, userName: string, nodeUpdateUserParameter: Models.NodeUpdateUserParameter, options: Models.ComputeNodeUpdateUserOptionalParams, callback: msRest.ServiceCallback<void>): void;
  updateUser(poolId: string, nodeId: string, userName: string, nodeUpdateUserParameter: Models.NodeUpdateUserParameter, options?: Models.ComputeNodeUpdateUserOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.ComputeNodeUpdateUserResponse> {
    return this.client.sendOperationRequest(
      {
        poolId,
        nodeId,
        userName,
        nodeUpdateUserParameter,
        options
      },
      updateUserOperationSpec,
      callback) as Promise<Models.ComputeNodeUpdateUserResponse>;
  }

  /**
   * @summary Gets information about the specified compute node.
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node that you want to get information about.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeGetResponse>
   */
  get(poolId: string, nodeId: string, options?: Models.ComputeNodeGetOptionalParams): Promise<Models.ComputeNodeGetResponse>;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node that you want to get information about.
   * @param callback The callback
   */
  get(poolId: string, nodeId: string, callback: msRest.ServiceCallback<Models.ComputeNode>): void;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node that you want to get information about.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(poolId: string, nodeId: string, options: Models.ComputeNodeGetOptionalParams, callback: msRest.ServiceCallback<Models.ComputeNode>): void;
  get(poolId: string, nodeId: string, options?: Models.ComputeNodeGetOptionalParams | msRest.ServiceCallback<Models.ComputeNode>, callback?: msRest.ServiceCallback<Models.ComputeNode>): Promise<Models.ComputeNodeGetResponse> {
    return this.client.sendOperationRequest(
      {
        poolId,
        nodeId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ComputeNodeGetResponse>;
  }

  /**
   * You can restart a node only if it is in an idle or running state.
   * @summary Restarts the specified compute node.
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node that you want to restart.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeRebootResponse>
   */
  reboot(poolId: string, nodeId: string, options?: Models.ComputeNodeRebootOptionalParams): Promise<Models.ComputeNodeRebootResponse>;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node that you want to restart.
   * @param callback The callback
   */
  reboot(poolId: string, nodeId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node that you want to restart.
   * @param options The optional parameters
   * @param callback The callback
   */
  reboot(poolId: string, nodeId: string, options: Models.ComputeNodeRebootOptionalParams, callback: msRest.ServiceCallback<void>): void;
  reboot(poolId: string, nodeId: string, options?: Models.ComputeNodeRebootOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.ComputeNodeRebootResponse> {
    return this.client.sendOperationRequest(
      {
        poolId,
        nodeId,
        options
      },
      rebootOperationSpec,
      callback) as Promise<Models.ComputeNodeRebootResponse>;
  }

  /**
   * You can reinstall the operating system on a node only if it is in an idle or running state. This
   * API can be invoked only on pools created with the cloud service configuration property.
   * @summary Reinstalls the operating system on the specified compute node.
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node that you want to restart.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeReimageResponse>
   */
  reimage(poolId: string, nodeId: string, options?: Models.ComputeNodeReimageOptionalParams): Promise<Models.ComputeNodeReimageResponse>;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node that you want to restart.
   * @param callback The callback
   */
  reimage(poolId: string, nodeId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node that you want to restart.
   * @param options The optional parameters
   * @param callback The callback
   */
  reimage(poolId: string, nodeId: string, options: Models.ComputeNodeReimageOptionalParams, callback: msRest.ServiceCallback<void>): void;
  reimage(poolId: string, nodeId: string, options?: Models.ComputeNodeReimageOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.ComputeNodeReimageResponse> {
    return this.client.sendOperationRequest(
      {
        poolId,
        nodeId,
        options
      },
      reimageOperationSpec,
      callback) as Promise<Models.ComputeNodeReimageResponse>;
  }

  /**
   * You can disable task scheduling on a node only if its current scheduling state is enabled.
   * @summary Disables task scheduling on the specified compute node.
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node on which you want to disable task scheduling.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeDisableSchedulingResponse>
   */
  disableScheduling(poolId: string, nodeId: string, options?: Models.ComputeNodeDisableSchedulingOptionalParams): Promise<Models.ComputeNodeDisableSchedulingResponse>;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node on which you want to disable task scheduling.
   * @param callback The callback
   */
  disableScheduling(poolId: string, nodeId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node on which you want to disable task scheduling.
   * @param options The optional parameters
   * @param callback The callback
   */
  disableScheduling(poolId: string, nodeId: string, options: Models.ComputeNodeDisableSchedulingOptionalParams, callback: msRest.ServiceCallback<void>): void;
  disableScheduling(poolId: string, nodeId: string, options?: Models.ComputeNodeDisableSchedulingOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.ComputeNodeDisableSchedulingResponse> {
    return this.client.sendOperationRequest(
      {
        poolId,
        nodeId,
        options
      },
      disableSchedulingOperationSpec,
      callback) as Promise<Models.ComputeNodeDisableSchedulingResponse>;
  }

  /**
   * You can enable task scheduling on a node only if its current scheduling state is disabled
   * @summary Enables task scheduling on the specified compute node.
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node on which you want to enable task scheduling.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeEnableSchedulingResponse>
   */
  enableScheduling(poolId: string, nodeId: string, options?: Models.ComputeNodeEnableSchedulingOptionalParams): Promise<Models.ComputeNodeEnableSchedulingResponse>;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node on which you want to enable task scheduling.
   * @param callback The callback
   */
  enableScheduling(poolId: string, nodeId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node on which you want to enable task scheduling.
   * @param options The optional parameters
   * @param callback The callback
   */
  enableScheduling(poolId: string, nodeId: string, options: Models.ComputeNodeEnableSchedulingOptionalParams, callback: msRest.ServiceCallback<void>): void;
  enableScheduling(poolId: string, nodeId: string, options?: Models.ComputeNodeEnableSchedulingOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.ComputeNodeEnableSchedulingResponse> {
    return this.client.sendOperationRequest(
      {
        poolId,
        nodeId,
        options
      },
      enableSchedulingOperationSpec,
      callback) as Promise<Models.ComputeNodeEnableSchedulingResponse>;
  }

  /**
   * Before you can remotely login to a node using the remote login settings, you must create a user
   * account on the node. This API can be invoked only on pools created with the virtual machine
   * configuration property. For pools created with a cloud service configuration, see the
   * GetRemoteDesktop API.
   * @summary Gets the settings required for remote login to a compute node.
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node for which to obtain the remote login settings.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeGetRemoteLoginSettingsResponse>
   */
  getRemoteLoginSettings(poolId: string, nodeId: string, options?: Models.ComputeNodeGetRemoteLoginSettingsOptionalParams): Promise<Models.ComputeNodeGetRemoteLoginSettingsResponse>;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node for which to obtain the remote login settings.
   * @param callback The callback
   */
  getRemoteLoginSettings(poolId: string, nodeId: string, callback: msRest.ServiceCallback<Models.ComputeNodeGetRemoteLoginSettingsResult>): void;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node for which to obtain the remote login settings.
   * @param options The optional parameters
   * @param callback The callback
   */
  getRemoteLoginSettings(poolId: string, nodeId: string, options: Models.ComputeNodeGetRemoteLoginSettingsOptionalParams, callback: msRest.ServiceCallback<Models.ComputeNodeGetRemoteLoginSettingsResult>): void;
  getRemoteLoginSettings(poolId: string, nodeId: string, options?: Models.ComputeNodeGetRemoteLoginSettingsOptionalParams | msRest.ServiceCallback<Models.ComputeNodeGetRemoteLoginSettingsResult>, callback?: msRest.ServiceCallback<Models.ComputeNodeGetRemoteLoginSettingsResult>): Promise<Models.ComputeNodeGetRemoteLoginSettingsResponse> {
    return this.client.sendOperationRequest(
      {
        poolId,
        nodeId,
        options
      },
      getRemoteLoginSettingsOperationSpec,
      callback) as Promise<Models.ComputeNodeGetRemoteLoginSettingsResponse>;
  }

  /**
   * Before you can access a node by using the RDP file, you must create a user account on the node.
   * This API can only be invoked on pools created with a cloud service configuration. For pools
   * created with a virtual machine configuration, see the GetRemoteLoginSettings API.
   * @summary Gets the Remote Desktop Protocol file for the specified compute node.
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node for which you want to get the Remote Desktop Protocol
   * file.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeGetRemoteDesktopResponse>
   */
  getRemoteDesktop(poolId: string, nodeId: string, options?: Models.ComputeNodeGetRemoteDesktopOptionalParams): Promise<Models.ComputeNodeGetRemoteDesktopResponse>;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node for which you want to get the Remote Desktop Protocol
   * file.
   * @param callback The callback
   */
  getRemoteDesktop(poolId: string, nodeId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node for which you want to get the Remote Desktop Protocol
   * file.
   * @param options The optional parameters
   * @param callback The callback
   */
  getRemoteDesktop(poolId: string, nodeId: string, options: Models.ComputeNodeGetRemoteDesktopOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getRemoteDesktop(poolId: string, nodeId: string, options?: Models.ComputeNodeGetRemoteDesktopOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.ComputeNodeGetRemoteDesktopResponse> {
    return this.client.sendOperationRequest(
      {
        poolId,
        nodeId,
        options
      },
      getRemoteDesktopOperationSpec,
      callback) as Promise<Models.ComputeNodeGetRemoteDesktopResponse>;
  }

  /**
   * This is for gathering Azure Batch service log files in an automated fashion from nodes if you
   * are experiencing an error and wish to escalate to Azure support. The Azure Batch service log
   * files should be shared with Azure support to aid in debugging issues with the Batch service.
   * @summary Upload Azure Batch service log files from the specified compute node to Azure Blob
   * Storage.
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node from which you want to upload the Azure Batch service
   * log files.
   * @param uploadBatchServiceLogsConfiguration The Azure Batch service log files upload
   * configuration.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeUploadBatchServiceLogsResponse>
   */
  uploadBatchServiceLogs(poolId: string, nodeId: string, uploadBatchServiceLogsConfiguration: Models.UploadBatchServiceLogsConfiguration, options?: Models.ComputeNodeUploadBatchServiceLogsOptionalParams): Promise<Models.ComputeNodeUploadBatchServiceLogsResponse>;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node from which you want to upload the Azure Batch service
   * log files.
   * @param uploadBatchServiceLogsConfiguration The Azure Batch service log files upload
   * configuration.
   * @param callback The callback
   */
  uploadBatchServiceLogs(poolId: string, nodeId: string, uploadBatchServiceLogsConfiguration: Models.UploadBatchServiceLogsConfiguration, callback: msRest.ServiceCallback<Models.UploadBatchServiceLogsResult>): void;
  /**
   * @param poolId The ID of the pool that contains the compute node.
   * @param nodeId The ID of the compute node from which you want to upload the Azure Batch service
   * log files.
   * @param uploadBatchServiceLogsConfiguration The Azure Batch service log files upload
   * configuration.
   * @param options The optional parameters
   * @param callback The callback
   */
  uploadBatchServiceLogs(poolId: string, nodeId: string, uploadBatchServiceLogsConfiguration: Models.UploadBatchServiceLogsConfiguration, options: Models.ComputeNodeUploadBatchServiceLogsOptionalParams, callback: msRest.ServiceCallback<Models.UploadBatchServiceLogsResult>): void;
  uploadBatchServiceLogs(poolId: string, nodeId: string, uploadBatchServiceLogsConfiguration: Models.UploadBatchServiceLogsConfiguration, options?: Models.ComputeNodeUploadBatchServiceLogsOptionalParams | msRest.ServiceCallback<Models.UploadBatchServiceLogsResult>, callback?: msRest.ServiceCallback<Models.UploadBatchServiceLogsResult>): Promise<Models.ComputeNodeUploadBatchServiceLogsResponse> {
    return this.client.sendOperationRequest(
      {
        poolId,
        nodeId,
        uploadBatchServiceLogsConfiguration,
        options
      },
      uploadBatchServiceLogsOperationSpec,
      callback) as Promise<Models.ComputeNodeUploadBatchServiceLogsResponse>;
  }

  /**
   * @summary Lists the compute nodes in the specified pool.
   * @param poolId The ID of the pool from which you want to list nodes.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeListResponse>
   */
  list(poolId: string, options?: Models.ComputeNodeListOptionalParams): Promise<Models.ComputeNodeListResponse>;
  /**
   * @param poolId The ID of the pool from which you want to list nodes.
   * @param callback The callback
   */
  list(poolId: string, callback: msRest.ServiceCallback<Models.ComputeNodeListResult>): void;
  /**
   * @param poolId The ID of the pool from which you want to list nodes.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(poolId: string, options: Models.ComputeNodeListOptionalParams, callback: msRest.ServiceCallback<Models.ComputeNodeListResult>): void;
  list(poolId: string, options?: Models.ComputeNodeListOptionalParams | msRest.ServiceCallback<Models.ComputeNodeListResult>, callback?: msRest.ServiceCallback<Models.ComputeNodeListResult>): Promise<Models.ComputeNodeListResponse> {
    return this.client.sendOperationRequest(
      {
        poolId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ComputeNodeListResponse>;
  }

  /**
   * @summary Lists the compute nodes in the specified pool.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeListResponse>
   */
  listNext(nextPageLink: string, options?: Models.ComputeNodeListNextOptionalParams): Promise<Models.ComputeNodeListResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ComputeNodeListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.ComputeNodeListNextOptionalParams, callback: msRest.ServiceCallback<Models.ComputeNodeListResult>): void;
  listNext(nextPageLink: string, options?: Models.ComputeNodeListNextOptionalParams | msRest.ServiceCallback<Models.ComputeNodeListResult>, callback?: msRest.ServiceCallback<Models.ComputeNodeListResult>): Promise<Models.ComputeNodeListResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ComputeNodeListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const addUserOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "pools/{poolId}/nodes/{nodeId}/users",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.poolId,
    Parameters.nodeId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout64
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId77,
    Parameters.returnClientRequestId77,
    Parameters.ocpDate77
  ],
  requestBody: {
    parameterPath: "user",
    mapper: {
      ...Mappers.ComputeNodeUser,
      required: true
    }
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    201: {
      headersMapper: Mappers.ComputeNodeAddUserHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};

const deleteUserOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "pools/{poolId}/nodes/{nodeId}/users/{userName}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.poolId,
    Parameters.nodeId,
    Parameters.userName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout65
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId78,
    Parameters.returnClientRequestId78,
    Parameters.ocpDate78
  ],
  responses: {
    200: {
      headersMapper: Mappers.ComputeNodeDeleteUserHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};

const updateUserOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "pools/{poolId}/nodes/{nodeId}/users/{userName}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.poolId,
    Parameters.nodeId,
    Parameters.userName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout66
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId79,
    Parameters.returnClientRequestId79,
    Parameters.ocpDate79
  ],
  requestBody: {
    parameterPath: "nodeUpdateUserParameter",
    mapper: {
      ...Mappers.NodeUpdateUserParameter,
      required: true
    }
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    200: {
      headersMapper: Mappers.ComputeNodeUpdateUserHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "pools/{poolId}/nodes/{nodeId}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.poolId,
    Parameters.nodeId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.select13,
    Parameters.timeout67
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId80,
    Parameters.returnClientRequestId80,
    Parameters.ocpDate80
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ComputeNode,
      headersMapper: Mappers.ComputeNodeGetHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};

const rebootOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "pools/{poolId}/nodes/{nodeId}/reboot",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.poolId,
    Parameters.nodeId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout68
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId81,
    Parameters.returnClientRequestId81,
    Parameters.ocpDate81
  ],
  requestBody: {
    parameterPath: {
      nodeRebootOption: [
        "options",
        "nodeRebootOption"
      ]
    },
    mapper: Mappers.NodeRebootParameter
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    202: {
      headersMapper: Mappers.ComputeNodeRebootHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};

const reimageOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "pools/{poolId}/nodes/{nodeId}/reimage",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.poolId,
    Parameters.nodeId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout69
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId82,
    Parameters.returnClientRequestId82,
    Parameters.ocpDate82
  ],
  requestBody: {
    parameterPath: {
      nodeReimageOption: [
        "options",
        "nodeReimageOption"
      ]
    },
    mapper: Mappers.NodeReimageParameter
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    202: {
      headersMapper: Mappers.ComputeNodeReimageHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};

const disableSchedulingOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "pools/{poolId}/nodes/{nodeId}/disablescheduling",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.poolId,
    Parameters.nodeId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout70
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId83,
    Parameters.returnClientRequestId83,
    Parameters.ocpDate83
  ],
  requestBody: {
    parameterPath: {
      nodeDisableSchedulingOption: [
        "options",
        "nodeDisableSchedulingOption"
      ]
    },
    mapper: Mappers.NodeDisableSchedulingParameter
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    200: {
      headersMapper: Mappers.ComputeNodeDisableSchedulingHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};

const enableSchedulingOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "pools/{poolId}/nodes/{nodeId}/enablescheduling",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.poolId,
    Parameters.nodeId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout71
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId84,
    Parameters.returnClientRequestId84,
    Parameters.ocpDate84
  ],
  responses: {
    200: {
      headersMapper: Mappers.ComputeNodeEnableSchedulingHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};

const getRemoteLoginSettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "pools/{poolId}/nodes/{nodeId}/remoteloginsettings",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.poolId,
    Parameters.nodeId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout72
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId85,
    Parameters.returnClientRequestId85,
    Parameters.ocpDate85
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ComputeNodeGetRemoteLoginSettingsResult,
      headersMapper: Mappers.ComputeNodeGetRemoteLoginSettingsHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};

const getRemoteDesktopOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "pools/{poolId}/nodes/{nodeId}/rdp",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.poolId,
    Parameters.nodeId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout73
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId86,
    Parameters.returnClientRequestId86,
    Parameters.ocpDate86
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      },
      headersMapper: Mappers.ComputeNodeGetRemoteDesktopHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};

const uploadBatchServiceLogsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "pools/{poolId}/nodes/{nodeId}/uploadbatchservicelogs",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.poolId,
    Parameters.nodeId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout74
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId87,
    Parameters.returnClientRequestId87,
    Parameters.ocpDate87
  ],
  requestBody: {
    parameterPath: "uploadBatchServiceLogsConfiguration",
    mapper: {
      ...Mappers.UploadBatchServiceLogsConfiguration,
      required: true
    }
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.UploadBatchServiceLogsResult,
      headersMapper: Mappers.ComputeNodeUploadBatchServiceLogsHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "pools/{poolId}/nodes",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.poolId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter12,
    Parameters.select14,
    Parameters.maxResults13,
    Parameters.timeout75
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId88,
    Parameters.returnClientRequestId88,
    Parameters.ocpDate88
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ComputeNodeListResult,
      headersMapper: Mappers.ComputeNodeListHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "{batchUrl}",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId89,
    Parameters.returnClientRequestId89,
    Parameters.ocpDate89
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ComputeNodeListResult,
      headersMapper: Mappers.ComputeNodeListHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};
