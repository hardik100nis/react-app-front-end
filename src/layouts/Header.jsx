import { Container, Nav, Navbar, Image } from 'react-bootstrap'
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Logo from 'assets/images/logoNew.svg'
import './Header.scss'
import ConnectWalletButton from 'components/ConnectWalletButton';
import RoundButton from 'components/RoundButton';
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();
  if (hash === '#about') {
    window.location.href = '#about'
  }
  return (
    <Navbar expand={false} data-bs-theme="dark" variant="dark" sticky="top" className="modern-header transparent-header">
      <Container fluid>
        <div className="header-content w-100">
          <div className="nav-left-spacer"></div>
          <Navbar.Brand href='#' onClick={() => navigate('/')} className='logo-container centered-logo'>
            <Image src={Logo} height='105px' width='120px' className="logo-image" />
          </Navbar.Brand>
          <div>
            <RoundButton type="button" variant='warning' className="network-btn warning-btn">
              <span className="btn-text">Home</span>
            </RoundButton>
            <RoundButton type="button" variant='warning' className="network-btn warning-btn">
              <span className="btn-text">About</span>
            </RoundButton>
            <RoundButton type="button" variant='warning' className="network-btn warning-btn">
              <span className="btn-text">Trade</span>
            </RoundButton>
            <RoundButton type="button" variant='warning' className="network-btn warning-btn">
              <span className="btn-text">Disclaimer</span>
            </RoundButton>
          </div>
          <div className="wallet-connect-container">
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === 'authenticated');

                return (
                  <div
                    {...(!ready && {
                      'aria-hidden': true,
                      'style': {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                      },
                    })}
                    className='button-group'
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <ConnectWalletButton onClick={openConnectModal} type="button" className="connect-btn glow-effect">
                            <span className="btn-icon">💼</span>
                            <span className="btn-text">Connect Wallet</span>
                          </ConnectWalletButton>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <RoundButton onClick={openChainModal} type="button" variant='warning' className="network-btn warning-btn">
                            <span className="btn-icon">⚠️</span>
                            <span className="btn-text">Wrong network</span>
                          </RoundButton>
                        );
                      }

                      return (
                        <div className='d-flex gap-3 isConnected wallet-connected'>
                          <RoundButton
                            onClick={openChainModal}
                            type="button"
                            className='d-flex align-items-center chain-btn'
                            variant='primary'
                          >
                            {chain.hasIcon && (
                              <div
                                className="chain-icon"
                                style={{
                                  background: chain.iconBackground,
                                  width: 18,
                                  height: 18,
                                  borderRadius: 999,
                                  overflow: 'hidden',
                                  marginRight: 8,
                                  boxShadow: '0 0 10px rgba(54, 202, 186, 0.5)',
                                }}
                              >
                                {chain.iconUrl && (
                                  <img
                                    alt={chain.name ?? 'Chain icon'}
                                    src={chain.iconUrl}
                                    style={{ width: 18, height: 18 }}
                                  />
                                )}
                              </div>
                            )}
                            <span className="chain-name">{chain.name}</span>
                          </RoundButton>

                          <RoundButton onClick={openAccountModal} type="button" variant='success' className="account-btn">
                            <span className="account-icon">👤</span>
                            <span className="account-text">
                              {account.displayName}
                              {account.displayBalance
                                ? <span className="balance-text"> ({account.displayBalance})</span>
                                : ''}
                            </span>
                          </RoundButton>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </div>
        </div>
      </Container>
    </Navbar>
  )
}
