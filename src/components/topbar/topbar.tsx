import { Frame, TopBar, Card, ActionList } from "@shopify/polaris";
import React, { useState, useCallback } from 'react';
import {ArrowLeftMinor} from '@shopify/polaris-icons';


export function TopBarExample() {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const toggleIsUserMenuOpen = useCallback(
      () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
      [],
    );
    const handleSearchResultsDismiss = useCallback(() => {
      setIsSearchActive(false);
      setSearchValue('');
    }, []);
    const handleSearchChange = useCallback((value) => {
      setSearchValue(value);
      setIsSearchActive(value.length > 0);
    }, []);
    const handleNavigationToggle = useCallback(() => {
      console.log('toggle navigation visibility');
    }, []);
    const userMenuMarkup = (
      <TopBar.UserMenu
        actions={[
          {
            items: [{content: 'Back to Shopify', icon: ArrowLeftMinor}],
          },
          {
            items: [{content: 'Community forums'}],
          },
        ]}
        name="Dharma"
        detail="Jaded Pixel"
        initials="D"
        open={isUserMenuOpen}
        onToggle={toggleIsUserMenuOpen}
      />
    );
    const searchResultsMarkup = (
      <Card>
        <ActionList
          items={[
            {content: 'Shopify help center'},
            {content: 'Community forums'},
          ]}
        />
      </Card>
    );
    const searchFieldMarkup = (
      <TopBar.SearchField
        onChange={handleSearchChange}
        value={searchValue}
        placeholder="Search"
      />
    );
    const topBarMarkup = (
      <TopBar
        showNavigationToggle
        userMenu={userMenuMarkup}
        searchResultsVisible={isSearchActive}
        searchField={searchFieldMarkup}
        searchResults={searchResultsMarkup}
        onSearchResultsDismiss={handleSearchResultsDismiss}
        onNavigationToggle={handleNavigationToggle}
      />
    );
    return (
      <div style={{height: '250px'}}>
          <Frame topBar={topBarMarkup} />
      </div>
    );
  }