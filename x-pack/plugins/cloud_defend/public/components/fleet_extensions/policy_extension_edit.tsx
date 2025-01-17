/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import React, { memo } from 'react';
import type { PackagePolicyEditExtensionComponentProps } from '@kbn/fleet-plugin/public';
import { ConfigYamlView } from '../config_yaml_view';

export const CloudDefendEditPolicyExtension = memo<PackagePolicyEditExtensionComponentProps>(
  ({ newPolicy, onChange }) => {
    return <ConfigYamlView policy={newPolicy} onChange={onChange} />;
  }
);

CloudDefendEditPolicyExtension.displayName = 'CloudDefendEditPolicyExtension';

// eslint-disable-next-line import/no-default-export
export { CloudDefendEditPolicyExtension as default };
