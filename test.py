import http.server
import socketserver
import os
import socket
import time

# 设置端口
PORT = 8080  # 使用8080端口，因为8000可能在Android上有问题

# 获取本地IP地址
def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "localhost"

# 切换到脚本所在目录
script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)

# 检查index.html是否存在
if not os.path.exists("index.html"):
    print("错误：当前目录下未找到index.html文件")
    exit(1)

# 创建服务器
try:
    # 使用0.0.0.0绑定所有接口
    with socketserver.TCPServer(("0.0.0.0", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
        local_ip = get_local_ip()
        print(f"\n服务器已启动！")
        print(f"在设备浏览器中访问: http://localhost:{PORT}")
        print(f"在局域网其他设备访问: http://{local_ip}:{PORT}")
        print("按 Ctrl+C 停止服务器")
        
        # 尝试在设备上打开浏览器
        try:
            import webbrowser
            webbrowser.open(f"http://localhost:{PORT}/index.html")
        except:
            print("无法自动打开浏览器，请手动访问上述地址")
        
        httpd.serve_forever()
except OSError as e:
    if "Address already in use" in str(e):
        print(f"错误：端口 {PORT} 已被占用，请关闭其他程序或更换端口。")
    else:
        print(f"启动服务器时出错: {e}")
except KeyboardInterrupt:
    print("\n服务器已停止")
