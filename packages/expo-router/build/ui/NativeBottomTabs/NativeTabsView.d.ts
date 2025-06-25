import { DefaultRouterOptions, ParamListBase, TabNavigationState, TabRouterOptions, useNavigationBuilder } from '@react-navigation/native';
import React from 'react';
import { BottomTabsProps } from 'react-native-screens/lib/typescript/components/BottomTabs';
export interface NativeTabOptions extends DefaultRouterOptions {
    placeholder?: React.ReactNode | undefined;
    badgeValue?: string;
    title?: string;
    icon?: string;
}
export type NativeTabsViewProps = Omit<BottomTabsProps, 'onNativeFocusChange'> & {
    builder: ReturnType<typeof useNavigationBuilder<TabNavigationState<ParamListBase>, TabRouterOptions, Record<string, (...args: any) => void>, NativeTabOptions, Record<string, any>>>;
};
export declare function NativeTabsView(props: NativeTabsViewProps): React.JSX.Element;
//# sourceMappingURL=NativeTabsView.d.ts.map