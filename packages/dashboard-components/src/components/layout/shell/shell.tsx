import { IconButton, Drawer, Progress } from "@zevaguillo/ui-components";
import * as RadixDialog from "@radix-ui/react-dialog";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import clsx from "clsx";

export interface ShellProps extends PropsWithChildren {
  sidebar?: ReactNode;
  sidebarOpen?: boolean;
  onSidebarOpenChange?: (open: boolean) => void;
  showBreadcrumbs?: boolean;
  breadcrumbs?: { label: string; href?: string }[];
}

export const Shell = ({
  children,
  sidebar,
  sidebarOpen = true,
  onSidebarOpenChange,
  showBreadcrumbs = true,
  breadcrumbs = [],
}: ShellProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative flex h-screen flex-col items-start overflow-hidden lg:flex-row">
      <LoadingBar show={loading} />

      <div>
        <MobileSidebarContainer open={mobileOpen} onOpenChange={setMobileOpen}>
          {sidebar}
        </MobileSidebarContainer>
        <DesktopSidebarContainer open={sidebarOpen}>
          {sidebar}
        </DesktopSidebarContainer>
      </div>

      <div className="flex h-screen w-full flex-col overflow-auto">
        <Topbar
          onToggleMobile={() => setMobileOpen(true)}
          onToggleDesktop={() => onSidebarOpenChange?.(!sidebarOpen)}
          showBreadcrumbs={showBreadcrumbs}
          breadcrumbs={breadcrumbs}
        />
        <main
          className={clsx(
            "flex h-full w-full flex-col items-center overflow-y-auto transition-opacity delay-200 duration-200",
            { "opacity-25": loading },
          )}
        >
          <div className="flex w-full max-w-[1600px] flex-col gap-y-2 p-3">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

const LoadingBar = ({ show }: { show: boolean }) => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (show) {
      timeout = setTimeout(() => {
        setShowBar(true);
      }, 200);
    } else {
      setShowBar(false);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [show]);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1">
      {showBar && <Progress variant="default" />}
    </div>
  );
};

interface TopbarProps {
  onToggleMobile: () => void;
  onToggleDesktop: () => void;
  showBreadcrumbs: boolean;
  breadcrumbs: { label: string; href?: string }[];
}

const Topbar = ({
  onToggleMobile,
  onToggleDesktop,
  showBreadcrumbs,
  breadcrumbs,
}: TopbarProps) => {
  return (
    <div className="grid w-full grid-cols-2 border-b p-3">
      <div className="flex items-center gap-x-1.5">
        <IconButton
          className="hidden lg:flex"
          variant="ghost"
          onClick={onToggleDesktop}
        >
          ☰
        </IconButton>
        <IconButton
          className="hidden max-lg:flex"
          variant="ghost"
          onClick={onToggleMobile}
        >
          ☰
        </IconButton>
        {showBreadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      </div>
      <div className="flex items-center justify-end gap-x-3">
        {/* Notifications placeholder */}
      </div>
    </div>
  );
};

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  if (items.length === 0) return null;

  return (
    <ol className="text-sm text-gray-500 flex select-none items-center">
      {items.map((crumb, index) => {
        const isLast = index === items.length - 1;
        const isSingle = items.length === 1;

        return (
          <li key={index} className="flex items-center">
            {!isLast ? (
              <Link
                className="hover:text-gray-700 transition-colors"
                to={crumb.href || "#"}
              >
                {crumb.label}
              </Link>
            ) : (
              <div>
                {!isSingle && <span className="block lg:hidden">...</span>}
                <span
                  className={clsx({
                    "hidden lg:block": !isSingle,
                  })}
                >
                  {crumb.label}
                </span>
              </div>
            )}
            {!isLast && <span className="mx-2">›</span>}
          </li>
        );
      })}
    </ol>
  );
};

interface DesktopSidebarContainerProps {
  open: boolean;
  children: ReactNode;
}

const DesktopSidebarContainer = ({
  open,
  children,
}: DesktopSidebarContainerProps) => {
  return (
    <div
      className={clsx("hidden h-screen w-[220px] border-e bg-gray-50", {
        "lg:flex": open,
      })}
    >
      {children}
    </div>
  );
};

interface MobileSidebarContainerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

const MobileSidebarContainer = ({
  open,
  onOpenChange,
  children,
}: MobileSidebarContainerProps) => {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="bg-black/50 fixed inset-0" />
        <RadixDialog.Content className="fixed inset-y-2 start-2 flex w-full max-w-[304px] flex-col overflow-hidden rounded-lg border-r bg-white shadow-lg">
          <div className="p-3 flex justify-end">
            <RadixDialog.Close asChild>
              <IconButton variant="ghost" size="small">
                ✕
              </IconButton>
            </RadixDialog.Close>
          </div>
          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
