import useAppContext from "@/hooks/useAppContext";
import styles from './index.module.scss';
import { 
    Divider, IconButton, List, ListItem, ListItemButton, 
    ListItemIcon, ListItemText, Box, SwipeableDrawer 
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { HomeOutlined, PermPhoneMsg, Build, FolderCopy } from '@mui/icons-material';
import Logo from "@/components/Logo";
import { RoutesType, routesList } from '.';
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"] });

const MenuIconButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <IconButton onClick={onClick} sx={{ padding: '4px' }}>
            <MenuIcon 
                htmlColor='grey' 
                sx={{ cursor: 'pointer', fontSize: '32px' }} 
            />
        </IconButton>
    )
}

const RouteIcon = ({ route, color }: { route: RoutesType, color: string }) => {
    if(route === 'Home')
        return <HomeOutlined htmlColor={color} />
    if(route === 'Tech Stack')
        return <Build htmlColor={color} />
    if(route === 'Projects')
        return <FolderCopy htmlColor={color} />
    return <PermPhoneMsg htmlColor={color} />
}

type DraweListItemProps = { 
    route: string, 
    currentPath: string, 
    switchToPage: (arg: string) => void 
}
const DrawerListItem = ({ route, currentPath, switchToPage }: DraweListItemProps) => {
    const path = route.trim().toLowerCase().replace(" ","") === "home" ? 
    "" : route.trim().toLowerCase().replace(" ","");
    const isActive = currentPath === path;
    const changeToPage = useCallback(() => switchToPage(path), [path])

    return (
        <div onClick={changeToPage}>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                        <RouteIcon 
                            route={route as RoutesType} 
                            color={isActive ? '#c9a461' : 'white'} 
                        />
                    </ListItemIcon>
                    <span>
                        <ListItemText 
                            className={`${styles.drawerText} ${open_sans.className} ${isActive ? styles.active : ''}`}
                            sx={{ textAlign: 'center' }} primary={route} 
                        />
                    </span>
                </ListItemButton>
            </ListItem>
            <Divider />
        </div>
    )
}

export default function Drawer() {
    const currentPath = usePathname().toLowerCase().replaceAll(/[^a-z]+/g, "");

    const [drawerOpen, setDrawerOpen] = useState(false);
    const openDrawer = useCallback(() => setDrawerOpen(true), [])
    const closeDrawer = useCallback(() => setDrawerOpen(false), [])

    const { navigateToPage } = useAppContext();
    const changeToPage = useCallback((page: string) => {
        closeDrawer()
        navigateToPage(page);
    }, [closeDrawer, navigateToPage]);

    return (
        <>
            <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                <MenuIconButton onClick={openDrawer} />
            </div>
            <SwipeableDrawer 
                anchor={"left"} className={styles.swipeableDrawer}
                open={drawerOpen} onOpen={() => {}} onClose={closeDrawer} 
                transitionDuration={450} 
            >
                <Box sx={{ width: 190 }} role="presentation">
                    <main className={styles.menuTop}>
                        <div className={styles.innerContainer}>
                            <MenuIconButton onClick={closeDrawer} />
                            <div onClick={() => changeToPage('')}><Logo /></div>
                        </div>
                    </main>
                    <Divider sx={{ borderColor: '#323232', borderWidth: '1px 0' }} />
                    <List>
                        {routesList.map(route => (
                            <DrawerListItem 
                                key={route}
                                route={route}
                                currentPath={currentPath}
                                switchToPage={changeToPage} 
                            />
                        ))}
                    </List>
                </Box>
            </SwipeableDrawer>
        </>
    )
}