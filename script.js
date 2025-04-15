const qaList = document.getElementById('qaList');
const searchInput = document.getElementById('searchInput');
const showHiddenBtn = document.getElementById('showHiddenBtn');
const hiddenCountSpan = document.getElementById('hiddenCount');
const totalCountSpan = document.getElementById('totalCount');
let hiddenItems = [];

// ** NEW QA DATA START **
const qaData = [
    { question: 'Alkane là:', answer: 'Hydrocarbon mạch hở, trong phân tử chỉ có liên kết đơn.' },
    { question: 'Chọn phát biểu sai về alkane:', answer: 'Methane, ethane và các chất cùng phân tử khối của chúng được gọi là alkane.' },
    { question: 'Alkane và cycloalkane được gọi chung là:', answer: 'Hydrocarbon no.' },
    { question: 'Alkane được gọi là hydrocarbon no là do trong phân tử:', answer: 'Bão hòa hydrogen.' },
    { question: 'Chọn phát biểu sai khi nói về mô hình phân tử alkane:', answer: 'Có 3 dạng mô hình phân tử alkane.' },
    { question: 'Chọn phát biểu sai về danh pháp thông thường:', answer: 'Không hình thành dựa theo nguồn gốc tìm ra chất hữu cơ.' },
    { question: 'Hệ thống danh pháp có tính thống nhất và hệ thống được xây dựng bởi:', answer: 'IUPAC' },
    { question: 'Tên thay thế được hình thành bằng cách:', answer: 'Ghép tên hydride nền với tên nhóm thế.' },
    { question: 'Các alkane có bao nhiêu nguyên tử C thì có đồng phân về mạch carbon?', answer: 'Từ 4 trở lên.' },
    { question: 'Alkane mạch phân nhánh chứa nguyên tử carbon:', answer: 'Liên kết với ba hoặc bốn nguyên tử carbon khác.' },
    { question: 'Alkane mạch không phân nhánh có mạch carbon mà trong đó mỗi nguyên tử carbon:', answer: 'Liên kết tối đa hai nguyên tử carbon khác.' },
    { question: 'Theo danh pháp thay thế, tên của alkane gồm:', answer: 'Tiền tố và hậu tố.' },
    { question: 'Phần tiền tố trong tên alkane liên quan:', answer: 'Số lượng nguyên tử carbon.' },
    { question: 'Phần hậu tố trong tên của C2H6 là:', answer: '-ane' },
    { question: 'Phần hậu tố trong tên của alkane là -ane với ý nghĩa:', answer: 'Hydrocarbon no.' },
    { question: 'Alkane mạch phân nhánh gồm:', answer: 'Mạch chính và mạch nhánh' },
    { question: 'Với alkane mạch phân nhánh, mạch carbon dài nhất là:', answer: 'Mạch chính.' },
    { question: 'Với alkane mạch phân nhánh, mạch nhánh còn được xem là:', answer: 'Nhóm thế alkyl.' },
    { question: 'Đánh số các nguyên tử carbon trên mạch chính xuất phát từ đầu gần mạch nhánh nhất để:', answer: 'Tổng số chỉ vị trí của các nhánh là nhỏ nhất.' },
    { question: 'Tên của alkane mạch phân nhánh bắt đầu bằng:', answer: 'Vị trí nhóm thế alkyl.' },
    { question: 'Ở điều kiện thường, các alkane sau đây là chất khí, trừ:', answer: 'Hexane' },
    { question: 'Phát biểu nào sau đây sai khi nói về tính chất vật lí của alkane:', answer: 'Butane, pentane là chất lỏng hoặc chất rắn ở điều kiện thường.' },
    { question: 'Tên gọi các alkane mạch hở không phân nhánh có 4 nguyên tử carbon và 7 nguyên tử carbon lần lượt là:', answer: 'Butane và heptane.' },
    { question: 'Alkane thuộc loại hợp chất hữu cơ kém phân cực nên có tính chất:', answer: 'Kém tan trong nước và tan nhiều trong dung môi hữu cơ.' },
    { question: 'Phản ứng nào không phải phản ứng tiêu biểu của alkane?', answer: 'Phản ứng trùng hợp.' },
    { question: 'Điền vào chỗ trống: Trong phản ứng thế halogen, nguyên tử H ở carbon …… dễ bị thế bởi nguyên tử halogen hơn so với nguyên tử H ở carbon ……', answer: 'Bậc cao hơn – bậc thấp.' },
    { question: 'Phản ứng cracking cho ra sản phẩm:', answer: 'Có mạch carbon ngắn hơn.' },
    { question: 'Phản ứng reforming làm tăng chỉ số gì của xăng, dầu?', answer: 'Octane' },
    { question: 'Alkane thường được sử dụng làm nhiên liệu trong công nghiệp và trong đời sống do phản ứng oxi hóa có đặc tính:', answer: 'Tỏa nhiều nhiệt.' },
    { question: 'Chất nào sau đây được sử dụng trong bật lửa gas?', answer: 'Butane' },
    { question: 'Chất nào không phải thành phần chủ yếu của Liquefied petroleum gas (LPG)?', answer: 'Pentane' },
    { question: 'Biện pháp nào làm giảm ô nhiễm môi trường gây ra do sử dụng nhiên liệu từ dầu mỏ?', answer: 'Đưa chất xúc tác vào ống xả của động cơ.' },
    { question: 'Khí thải của động cơ chứa những chất nào gây ô nhiễm môi trường?', answer: 'Carbon monoxide, alkane, các oxide của nitrogen.' },
    { question: 'Đưa chất xúc tác vào ống xả của động cơ làm giảm ô nhiễm môi trường là do chất xúc tác có công dụng:', answer: 'Carbon monoxide chuyển hóa thành carbon dioxide.' },
    { question: 'Chọn phát biểu sai trong các phát biểu sau:', answer: 'Phản ứng reforming xảy ra ở nhiệt độ thường và được chiếu sáng.' },
    { question: 'Phản ứng nào của alkane tạo thành những hợp chất có mạch carbon ngắn hơn?', answer: 'Phản ứng cracking.' },
    { question: 'Phản ứng nào của alkane tạo thành sản phẩm có nhiều mạch nhánh hơn hoặc mạch vòng?', answer: 'Phản ứng reforming.' },
    { question: 'Chọn phát biểu đúng về cách viết danh pháp alkane:', answer: 'Các mạch nhánh được gọi lần lượt theo trật tự chữ cái đầu trong tên theo bảng chữ cái.' },
    { question: 'Phát biểu nào sau đây sai về ứng dụng của alkane:', answer: 'Các alkane dạng lỏng được dùng làm sáp.' },
    { question: 'Những phản ứng đặc trưng nào của alkane xảy ra trong quá trình lọc hóa dầu?', answer: 'Phản ứng cracking và reforming.' },
    { question: 'Ở điều kiện nào thì alkane có thể xảy ra phản ứng reforming hoặc cracking?', answer: 'Nhiệt độ cao và có chất xúc tác.' },
    { question: 'Propane tác dụng với chlorine trong điều kiện thích hợp tạo ra sản phẩm: 1-chloropropane và 2-chloropropane. Phát biểu nào sau đây đúng?', answer: '2-chloropropane chiếm tỉ lệ nhiều hơn 1-chloropropane.' },
    { question: 'Methane tác dụng với chlorine trong điều kiện thích hợp, sản phẩm đầu tiên được tạo ra là:', answer: 'Chloromethane' },
    { question: 'Bậc của nguyên tử carbon trong phân tử:', answer: 'Bằng số liên kết giữa nguyên tử carbon đó với các nguyên tử carbon xung quanh.' },
    { question: 'Ở nhiệt độ cao, các alkane bị oxi hóa bởi:', answer: 'Oxygen' },
    { question: 'Phản ứng oxi hóa hoàn toàn alkane tạo ra:', answer: 'Carbon dioxide và nước.' },
    { question: 'Phát biểu nào sau đây sai khi nói về alkane:', answer: 'Các alkane tác dụng kiềm, acid và một số chất oxi hóa ở điều kiện thường.' },
    { question: 'Định nghĩa đúng nhất về hydrocarbon không no:', answer: 'Hydrocarbon có liên kết đôi và/ hoặc liên kết ba trong phân tử.' },
    { question: 'Alkene là:', answer: 'Hydrocarbon không no, mạch hở, có 1 liên kết đôi.' },
    { question: 'Alkene còn được gọi là:', answer: 'Olefin' },
    { question: 'Hydrocarbon không no, mạch hở, phân tử có một liên kết ba được gọi là:', answer: 'Alkyne' },
    { question: 'Những alkene và alkyne đơn giản nhất là:', answer: 'Ethene và ethyne.' },
    { question: 'Những chất nào sau đây thuộc alkene:', answer: 'Ethene, propene, butene.' },
    { question: 'Trong phân tử alkene hay akyne, mạch chính là:', answer: 'Mạch dài nhất chứa liên kết đôi hoặc liên kết ba.' },
    { question: 'Alkene có đồng phân nào mà alkyne không có?', answer: 'Đồng phân hình học.' },
    { question: 'Công thức chung của alkene là?', answer: 'CnH2n' },
    { question: 'Công thức chung của alkyne là?', answer: 'CnH2n-2' },
    { question: 'Đồng phân cis- có mạch chính:', answer: 'Nằm về một phía của liên kết đôi.' },
    { question: 'Đồng phân hình học bao gồm:', answer: 'Đồng phân cis- và đồng phân trans-.' },
    { question: 'Phần hậu tố trong tên của C2H4 là:', answer: '-ene' },
    { question: 'Phần hậu tố trong tên của C2H2 là:', answer: '-yne' },
    { question: 'Cách gọi tên của alkene mạch không phân nhánh:', answer: 'Tên tiền tố - số chỉ vị trí liên kết đôi – tên hậu tố.' },
    { question: 'Phần đầu tiên trong tên của alkyne mạch nhánh là:', answer: 'Số chỉ vị trí mạch nhánh' },
    { question: 'Tên riêng của ethyne là:', answer: 'Acetylene.' },
    { question: 'Alkene và alkyne có nhiều tính chất vật lý gần giống với alkane nào?', answer: 'Có cùng số nguyên tử carbon.' },
    { question: 'Nhiệt độ sôi, nhiệt độ nóng chảy của alkene và alkyne:', answer: 'Tăng theo chiều tăng số nguyên tử carbon.' },
    { question: 'Nhiệt độ sôi của alkene so với alkane cùng mạch carbon:', answer: 'Thấp hơn.' },
    { question: 'Ở điều kiện thường, các alkyne có số nguyên tử carbon bao nhiêu thì tồn tại ở thể khí:', answer: 'Nhỏ hơn 5' },
    { question: 'Ở điều kiện thường, các alkyne có số nguyên tử carbon nhỏ hơn 5 tồn tại ở thể khí, trừ:', answer: 'But-2-yne' },
    { question: 'Liên kết đôi gồm:', answer: 'Một liên kết s và một liên kết p' },
    { question: 'Liên kết ba gồm:', answer: 'Một liên kết s và hai liên kết p' },
    { question: 'Alkene và alkyne dễ tham gia các phản ứng hóa học hơn alkane là do:', answer: 'Liên kết p kém bền hơn liên kết s' },
    { question: 'Phản ứng tiêu biểu của alkene là:', answer: 'Phản ứng trùng hợp.' },
    { question: 'Phản ứng tiêu biểu của alkyne là:', answer: 'Phản ứng cộng.' },
    { question: 'Liên kết gì là trung tâm phản ứng của hydrocarbon không no?', answer: 'Liên kết p' },
    { question: 'Xúc tác sử dụng để hydrogen hóa alkyne thành alkene là:', answer: 'Lindlar' },
    { question: 'Nước bromine sử dụng để nhận biết hydrocarbon không no do:', answer: 'Alkene, alkyne làm mất màu vàng nâu của nước bromine.' },
    { question: 'Chọn phát biểu đúng về quy tắc Markovnikov:', answer: 'Nguyên tử X cộng vào nguyên tử carbon mang liên kết đôi bậc cao hơn.' },
    { question: 'Điều kiện xảy ra phản ứng hydrate hóa alkene là:', answer: 'Sử dụng acid mạnh làm xúc tác.' },
    { question: 'Hydrate hóa alkyne tạo ra sản phẩm chính là ketone, trừ:', answer: 'Acetylene' },
    { question: 'Phản ứng đặc trưng nào của alkene tạo ra polymer?', answer: 'Phản ứng trùng hợp.' },
    { question: 'Alkyne phản ứng với dung dịch silver nitrate trong ammonia có đặc điểm:', answer: 'Liên kết ba ở đầu mạch.' },
    { question: 'Alk-1-yne phản ứng với dung dịch silver nitrate trong ammonia tạo kết tủa màu gì?', answer: 'Vàng nhạt.' },
    { question: 'Những chất dùng để nhận biết alkene, alkyne là:', answer: 'Nước bromine, thuốc tím.' },
    { question: 'Acetylene và ethylene đều được sử dụng để?', answer: 'Làm chín trái cây.' },
    { question: 'Có thể điều chế acetylene từ chất nào?', answer: 'Methane, calcium carbide.' },
    { question: 'Trong công nghiệp, alkene thường được điều chế từ phản ứng:', answer: 'Cracking alkane.' },
    { question: 'Các phản ứng nào của alkene tuân theo quy tắc Markovnikov?', answer: 'Hydrohalogen hóa, hydrate hóa.' },
    { question: 'Tên gọi các chất sau CH2=C(CH3)2, CH3C≡CCH3 lần lượt là', answer: '2-methylpropene, but-2-yne' },
    { question: 'Để phân biệt 2 chất but-1-ene (CH2=CHCH2CH3) và but-1-yne (CH≡CCH2CH3), có thể dùng:', answer: 'Thuốc thử Tollens.' },
    { question: 'Trong thực tiễn, chất nào được dùng để điều khiển quá trình sinh mủ của cây cao su?', answer: 'Ethylene và acetylene.' },
    { question: 'Trong công nghiệp, alkene được điều chế bằng phản ứng dehydrate alcohol ở nhiệt độ cao và sử dụng chất xúc tác:', answer: 'Aluminium oxide.' },
    { question: 'Chất nào sau đây không có đồng phân hình học?', answer: 'Acetylene.' },
    { question: 'Chất nào sau đây có đồng phân hình học?', answer: 'But-2-ene.' },
    { question: 'Phát biểu nào sau đây sai:', answer: 'Alkene và alkyne có đồng phân cấu tạo và đồng phân hình học.' },
    { question: 'Các nguyên tử carbon trong phân tử benzene:', answer: 'Liên kết với nhau tạo thành một vòng kín, hình lục giác đều.' },
    { question: 'Hydrocarbon thơm là:', answer: 'Hydrocarbon trong phân tử chứa vòng benzene.' },
    { question: 'Hydrocarbon thơm có công thức chung là:', answer: 'CnH2n-6 (n ≥ 6)' },
    { question: 'Có bao nhiêu cách viết công thức cấu tạo dạng thu gọn của benzene:', answer: '3' },
    { question: 'Hydrocarbon thơm có mạch nhánh chứa nối đôi là:', answer: 'Styrene' },
    { question: 'Hydrocarbon thơm do hai vòng benzene ghép lại với nhau là:', answer: 'Naphthalene' },
    { question: 'Ở điều kiện thường, hydrocarbon trong dãy đồng đẳng benzene ở trạng thái:', answer: 'Lỏng hoặc rắn' },
    { question: 'So với các hydrocarbon khác, hydrocarbon thơm có độ tan trong nước:', answer: 'Lớn hơn.' },
    { question: 'Tên thông thường của 1,4-dimethylbenzene là:', answer: 'p-xylene' },
    { question: 'Khi có hai nhóm thế trên vòng benzene, vị trí của chúng được chỉ ra bằng các chữ tương ứng vị trí 1,2; 1,3; 1,4 là:', answer: 'Ortho, meta, para.' },
    { question: 'Các hydrocarbon thơm tác động sức khỏe con người bằng cách nào?', answer: 'Qua hít thở không khí bị ô nhiễm.' },
    { question: 'Các alkylbenzene phản ứng halogen cho sản phẩm thế chủ yếu vào vị trí:', answer: 'Ortho hoặc para so với nhóm alkyl.' },
    { question: 'Chọn phát biểu sai về phản ứng ở vòng benzene:', answer: 'Có tính chất hóa học giống với các hydrocarbon không no khác.' },
    { question: 'Phản ứng nitro hóa xảy ra khi hydrocarbon thơm phản ứng với:', answer: 'Dung dịch nitric acid đậm đặc.' },
    { question: 'Phản ứng cộng vòng benzene xảy ra trong những điều kiện:', answer: 'Nhiệt độ cao, áp suất cao, chiếu tia tử ngoại.' },
    { question: 'Chất có độc tính với sâu bọ, người, chim, thú; tác nhân gây ung thư, suy gan là:', answer: 'C6H6Cl6.' },
    { question: 'Chọn phát biểu sai: Quy tắc chung về phản ứng thế nguyên tử H ở vòng thơm:', answer: 'Ưu tiên thế vị trí meta so với nhóm alkyl.' },
    { question: 'Phản ứng thế halide của benzene sử dụng xúc tác:', answer: 'FeCl3 hoặc FeBr3' },
    { question: 'Hydrocarbon thơm không được điều chế từ quá trình:', answer: 'Phản ứng cracking alkane.' },
    { question: 'Hiện nay có xu hướng hạn chế sự có mặt của nhiều arene trong nhiên liệu dù chỉ số octane của chúng cao do chúng:', answer: 'Là tác nhân dẫn tới bệnh ung thư.' },
    { question: 'Arene nào có mùi thơm và có tác dụng xua đuổi côn trùng?', answer: 'Nathphalene' },
    { question: 'Chất dùng để phân biệt benzene và toluene là:', answer: 'Thuốc tím.' },
    { question: 'Thuốc trừ sâu được tạo ra từ phản ứng:', answer: 'Cộng chlorine của benzene.' },
    { question: 'Chọn phát biểu sai về tính chất vật lí của arene:', answer: 'Độ tan trong nước thường nhỏ hơn các hydrocarbon khác.' },
    { question: 'Có thể dùng thuốc tím để phân biệt các chất:', answer: 'Benzene, toluene, styrene.' },
    { question: 'Trong môi trường acid, toluene tác dụng với thuốc tím tạo sản phẩm:', answer: 'Benzoic acid' },
    { question: 'Công thức phân tử toluene:', answer: 'C7H8' },
    { question: 'Benzene tác dụng với Br2 theo tỷ lệ mol 1: 1 (điều kiện thích hợp), thu được sản phẩm:', answer: 'C6H5Br' },
    { question: 'Số đồng phân hydrocarbon thơm ứng với công thức C8H10 là', answer: '4' },
    { question: 'Toluene tác dụng với Br2 (tỷ lệ mol 1: 1, điều kiện thích hợp), thu được sản phẩm:', answer: 'o-bromotoluene' },
    { question: 'Chất nào sau đây có khả năng tham gia phản ứng trùng hợp tạo polymer?', answer: 'Styrene' },
    { question: 'Chất nào sau đây làm mất màu dung dịch KMnO4 ở nhiệt độ thường?', answer: 'Styrene' },
    { question: 'Chất nào sau đây làm mất màu dung dịch KMnO4 khi đun nóng?', answer: 'Toluene' },
    { question: 'Đốt cháy hoàn toàn alkylbenzene X thu được 7,84 lít CO2 (đktc) và 3,6 gam H2O. Công thức phân tử của X là:', answer: 'C7H8' },
    { question: 'X là đồng đẳng của benzene, công thức đơn giản nhất là C3H4. Công thức phân tử X là:', answer: 'C9H12' },
    { question: 'Cho các hydrocarbon: ethene, acetylene, benzene, toluene, isopentane, styrene. Số chất làm mất màu dung dịch KMnO4?', answer: '4' },
    { question: 'Trong vòng benzene chứa mấy liên kết pi', answer: '3' },
    { question: 'Giả sử số nguyên tử carbon trong phân tử hydrocarbon thơm là n. Điều kiện của n:', answer: 'n ≥ 6' },
    { question: 'Tính chất hóa học đặc trưng của benzen và đồng đẳng của nó là:', answer: 'Dễ thế, khó cộng.' },
    { question: 'Hydrocarbon thơm còn được gọi là', answer: 'Arene' },
    { question: 'Những chất nào sau đây chung dãy đồng đẳng?', answer: 'Benzene, toluene, xylene.' },
    { question: 'Khi tiếp xúc lâu với naphthalene, có thể xuất hiện tình trạng gì ở trẻ nhỏ?', answer: 'Thiếu máu' },
    { question: 'Nguyên liệu cho chế tạo nhựa PS là:', answer: 'Styrene' },
    { question: 'Mô tả nào đúng khi nói về vòng benzene?', answer: '3 liên kết đôi và 3 liên kết đơn xen kẽ nhau' },
    { question: 'Điền vào chỗ trống: Trong xăng có khoảng … toluene và khoảng 1% - 6% xylene.', answer: '0.05' },
    { question: 'Xúc tác dùng trong phản ứng nitro hóa là:', answer: 'Dung dịch H2SO4 đậm đặc' },
    { question: 'Xylene hơn toluene:', answer: '1 nhóm methyl' },
    { question: 'Phát biểu nào sau đây sai:', answer: 'LAS là thành phần chính của thuốc trừ sâu.' },
    { question: 'Điền vào chỗ trống: Khi thay thế…….của phân tử hydrocarbon bằng……….được dẫn xuất halogen của hydrocarbon.', answer: 'Nguyên tử hydrogen – nguyên tử halogen.' },
    { question: 'Dẫn xuất halogen có những đồng phân nào?', answer: 'Đồng phân mạch carbon, đồng phân vị trí nhóm chức.' },
    { question: 'Dẫn xuất halogen có thể có bao nhiêu danh pháp?', answer: '3' },
    { question: 'Danh pháp thay thế của dẫn xuất halogen bắt đầu bằng:', answer: 'Số chỉ vị trí nhóm thế' },
    { question: 'Chọn phát biểu đúng về danh pháp thay thế của dẫn xuất halogen.', answer: 'Đối với dẫn xuất halogen không no, ưu tiên đánh số từ phía đầu mạch gần liên kết bội hơn.' },
    { question: 'Chọn phát biểu sai về tính chất vật lý của dẫn xuất halogen.', answer: 'Ở điều kiện thường, các dẫn xuất halogen tồn tại ở thể lỏng hoặc rắn.' },
    { question: 'Chọn phát biểu sai về trạng thái tồn tại của dẫn xuất halogen ở điều kiện thường.', answer: 'Dẫn xuất halogen ở thể khí: CH3F, CH3I.' },
    { question: 'Trước đây, những hợp chất nào được sử dụng làm thuốc trừ sâu?', answer: 'C6H6Cl6 và dichlorodiphenyltrichloroethane' },
    { question: 'Hiện nay, hợp chất được dùng trong công nghệ làm lạnh để bảo vệ tầng ozone là?', answer: 'HFC' },
    { question: 'Chọn phát biểu sai về ứng dụng của dẫn xuất halogen:', answer: 'CHCl3 được sử dụng làm thuốc trừ sâu.' },
    { question: 'Trong quá trình sản xuất 2,4-D và 2,4,5-T từ phenol luôn sinh ra một lượng chất nào có thể gây ung thư, quái thai,… cho con người?', answer: 'Dioxin' },
    { question: 'Chọn phát biểu sai về tính chất của Dioxin.', answer: 'Trong công thức cấu tạo của Dioxin có 2 nguyên tử O và 3 nguyên tử Cl.' },
    { question: 'Ứng dụng của halothane và chloroform:', answer: 'Chất gây mê trong y học.' },
    { question: 'Chọn phát biểu sai về CFC.', answer: 'Freon hiện nay được sử dụng nhiều trong công nghệ làm lạnh' },
    { question: 'Công thức phân tử C2H2Cl2 có mấy đồng phân?', answer: '3' },
    { question: 'CHCl3 có tên thông thường là:', answer: 'Chloroform' },
    { question: 'Sắp xếp theo thứ tự tăng dần nhiệt độ sôi của các chất sau: CH3F, CH3Cl, CH3Br, CH3I.', answer: 'CH3F, CH3Cl, CH3Br, CH3I.' },
    { question: 'Hai loại phản ứng hóa học quan trọng của dẫn xuất halogen là phản ứng nào?', answer: 'Phản ứng thế nguyên tử halogen và phản ứng tách hydrogen halide.' },
    { question: 'Chọn phát biểu sai về tính chất hóa học của dẫn xuất halogen.', answer: 'Phản ứng thế nguyên tử halogen và phản ứng cộng nguyên tử halogen là hai phản ứng hóa học quan trọng của dẫn xuất halogen.' },
    { question: 'Số đồng phân dẫn xuất halogen bậc II mạch hở có công thức phân tử C5H11Cl là?', answer: '3' },
    { question: 'Số đồng phân dẫn xuất halogen bậc I mạch hở có công thức phân tử C5H11Cl là?', answer: '4' },
    { question: 'Sản phẩm chính của phản ứng tách HBr của CH3CH(CH3)CHBrCH3 là:', answer: '2-methylbut-2-ene' },
    { question: 'Ứng dụng nào của dẫn xuất halogen hiện nay không còn được sử dụng?', answer: 'CFCl3, CF2Cl2 dùng trong máy lạnh' },
    { question: 'Nguyên tử carbon no là:', answer: 'Nguyên tử carbon liên kết với nguyên tử khác chỉ bằng các liên kết đơn.' },
    { question: 'Hợp chất CH3CH(Cl)CH3 là dẫn xuất halogen bậc mấy?', answer: '2' },
    { question: 'Hợp chất nào dưới đây dùng để tổng hợp ra PVC?', answer: 'CH2=CH-Cl' },
    { question: 'Theo quy tắc Zaitsev, sản phẩm chính của phản ứng tách HCl khỏi phân tử 2-chlorobutane:', answer: 'But-2-ene' },
    { question: 'Chất nào sau đây là dẫn xuất halogen của hydrocarbon?', answer: 'C­6H5 – CH2 – Cl' },
    { question: 'Chất nào sau đây không phải là dẫn xuất halogen của hydrocarbon?', answer: 'Cl2CH – CF­2 – O – CH3' },
    { question: 'Tên gọi nào sau đây không phải của 1,2,3,4,5,6-hexachlorocyclohexane?', answer: 'Halothane' },
    { question: 'Phản ứng thế nguyên tử halogen bằng nhóm -OH còn được gọi là:', answer: 'Phản ứng thủy phân' },
    { question: 'Đâu không phải là tên gọi theo danh pháp gốc – chức.', answer: '1,3-dibromobenzene' },
    { question: 'Khi đun sôi hỗn hợp gồm C­2H5Br và KOH trong C2H5OH thấy thoát ra một chất khí không màu, dẫn khí này đi qua ống nghiệm đựng nước bromine, hiện tượng xảy ra là:', answer: 'Nước bromine bị mất màu' },
    { question: 'Thu được chất nào sau đây khi đun nóng ethyl chloride trong dung dịch KOH và C2H5OH.', answer: 'Ethylene' },
    { question: 'Chọn phát biểu sai.', answer: '1,2,3,4,5,6-hexachlorocyclohexane còn được gọi là hexachlorane hay halothane.' },
    { question: 'Chất nào được dùng làm thuốc xịt có tác dụng giảm đau tạm thời khi chơi thể thao?', answer: 'Ethyl chloride' },
    { question: 'Danh pháp IUPAC của chất có công thức cấu tạo: Cl-CH2-CH(CH3)-CHCl-CH3 là:', answer: '1,3-dichloro-2-methylbutane' },
    { question: 'Phản ứng nào của dẫn xuất halogen tuân theo quy tắc Zaitsev?', answer: ',Phản ứng tách hydrogen halide' }, // Note: comma at the beginning of the answer
    { question: 'Ở điều kiện thường, các dẫn xuất halogen có phân tử khối nhỏ có trạng thái tồn tại là:', answer: 'Thể khí' },
    { question: 'Các dẫn xuất halogen nào ở thể rắn trong điều kiện thường?', answer: 'CHI­3, C6H6Cl6' },
    { question: 'Hydrocarbon CH4 có thể có bao nhiêu dẫn xuất cloride tương ứng?', answer: '4' },
    { question: 'Để thu được teflon, tiến hành trùng hợp:', answer: 'Tetraflouroethylene' },
    { question: 'Cho các chất: C6H5CH2Cl; CH3CHClCH3; CH2=CHCl. Tên gọi các chất trên lần lượt là:', answer: 'Benzyl chloride, isopropyl chloride, vinyl chloride' },
    { question: 'Đun dẫn xuất halogen với dung dịch kiềm thu được:', answer: 'Alcohol' },
    { question: 'Sự tách hydrogen halide của dẫn xuất halogen X có CTPT C4H9Cl cho 3 olefin đồng phân, X là chất nào trong những chất sau đây?', answer: 'sec-butyl chloride' },
    { question: 'Các chất sau đây phản ứng tách hydrogen halide tạo ra một sản phẩm, trừ:', answer: '2-chlorobutane' },
    { question: 'Chọn phát biểu đúng về quy tắc Zaitsev:', answer: 'Ưu tiên tách nguyên tử halogen cùng nguyên tử hydrogen ở nguyên tử carbon bên cạnh có bậc cao hơn.' },
    { question: 'Dẫn xuất halogen không có đồng phân cis-trans là:', answer: 'CH2=CH-CH2F' },
    { question: 'Có mấy đồng phân C4H9Br khi tác dụng với dung dịch KOH trong ethanol chỉ tạo 1 ankene duy nhất?', answer: '3' },
    { question: 'Alcohol là những hợp chất hữu cơ:', answer: 'Trong phân tử có nhóm hydroxy liên kết trực tiếp với nguyên tử carbon no.' },
    { question: 'Có thể phân loại alcohol theo các cách:', answer: 'Gốc hydrocarbon, số lượng nhóm hydroxy, bậc alcohol.' },
    { question: 'Công thức chung của alcoholno, đơn chức, mạch hở là:', answer: 'CnH2n+1OH' },
    { question: 'Hai alcohol đầu tiên trong dãy đồng đẳng alcohol no, đơn chức, mạch hở là:', answer: 'Methanol, ethanol.' },
    { question: 'Alcohol chứa nhiều nhóm hydroxy trong phân tử được gọi là:', answer: 'Polyalcohol.' },
    { question: 'Chọn phát biểu đúng về tính chất vật lý của alcohol.', answer: 'Nhiệt độ sôi cao hơn các hydrocarbon có phân tử khối tương đương.' },
    { question: 'Ở điều kiện thường, các alcohol no, đơn chức, mạch hở chứa bao nhiêu nguyên tử carbon là chất lỏng?', answer: 'Từ 1 đến 11 nguyên tử carbon.' },
    { question: 'Các alcohol nào sau đây sánh, nặng hơn nước và có vị ngọt?', answer: 'Ethane-1,2-diol, glycerol.' },
    { question: 'Liên kết C-OH và O-H trong phân tử alcohol là các liên kết cộng hóa trị phân cực do:', answer: 'Nguyên tử oxygen có độ âm điện lớn hơn carbon và hydrogen.' },
    { question: 'Liên kết C-OH và liên kết O-H là các liên kết cộng hóa trị phân cực nên các thành phần dễ bị tách trong các phản ứng hóa học là:', answer: 'Nguyên tử hydrogen hoặc nhóm hydroxy.' },
    { question: 'Phản ứng nào của alcohol xảy ra sẽ giải phóng khí hydrogen?', answer: 'Phản ứng thế nguyên tử hydrogen trong nhóm -OH' },
    { question: 'Alcohol nào sau đây không bị oxi hóa bởi CuO?', answer: '2-methylpropan-2-ol' },
    { question: 'Chất nào sau đây không hòa tan copper(II) hydroxide?', answer: 'Propane-1,3-diol' },
    { question: 'Các alcohol có phản ứng hòa tan copper(II) hydroxide có đặc điểm:', answer: 'Có 2 nhóm hydroxy liền kề.' },
    { question: 'Cồn bao nhiêu độ thì rất dễ bắt lửa và cháy?', answer: '50­­o trở lên' },
    { question: 'Chọn phát biểu sai:', answer: 'Cất trữ các chai cồn gần bếp, khu vực đun, nấu.' },
    { question: 'Alcohol có nhiều ứng dụng trong đời sống và sản xuất là:', answer: 'Ethyl alcohol.' },
    { question: 'Rượu giả được pha chế từ cồn công nghiệp có chứa một lượng nhỏ chất gì?', answer: 'Methanol.' },
    { question: 'Ứng dụng nào sau đây không phải của ethanol:', answer: 'Chất giữ ẩm trong mĩ phẩm.' },
    { question: 'Ứng dụng của glycerol trong đời sống là:', answer: 'Làm hương vị trong thực phẩm.' },
    { question: 'Trong công nghiệp sản xuất rượu, các chất độc hại nào thường được loại bỏ?', answer: 'Methanol, aldehyde.' },
    { question: 'Chọn phát biểu sai:', answer: 'Methanol có nhiều trong đồ uống có cồn.' },
    { question: 'Vì sao rượu bia là nguyên nhân hàng đầu gây ra tai nạn giao thông?', answer: 'Ethanol tác động đến hệ thần kinh và đặc biệt là não, làm phản ứng cơ thể chậm đi.' },
    { question: 'Ethanol được điều chế phổ biến bằng phương pháp:', answer: 'Lên men các nguyên liệu chứa nhiều tinh bột hoặc đường.' },
    { question: 'Alcohol no, đơn chức có 10 nguyên tử H trong phân tử có số đồng phân là:', answer: '4' },
    { question: 'Một alcohol no, đơn chức, mạch hở có %H = 13,04% về khối lượng, có công thức phân tử là:', answer: 'C2H5OH' },
    { question: 'Có bao nhiêu alcohol bậc 2, no, đơn chức, mạch hở là đồng phân cấu tạo của nhau mà phân tử của chúng có phần trăm khối lượng carbon bằng 68,18%?', answer: '3' },
    { question: 'Có bao nhiêu alcohol bậc III, có công thức phân tử C6H14O?', answer: '3' },
    { question: 'Alcohol bậc mấy phản ứng với CuO sinh ra ketone?', answer: '2' },
    { question: 'Alcohol bậc 1 phản ứng với CuO sinh ra:', answer: 'Aldehyde' },
    { question: 'Bậc của alcohol là:', answer: 'Bậc nguyên tử carbon liên kết với nhóm -OH.' },
    { question: 'Bậc alcohol của 2-metylbutan-2-ol là:', answer: 'Bậc 3' },
    { question: 'Các alcohol (CH3)2CHOH, CH3CH2OH, (CH3)3C-OH có bậc alcohol lần lượt là:', answer: '2, 1, 3' },
    { question: 'Phương pháp điều chế ethyl alcohol từ chất nào sau đây là phương pháp sinh hóa?', answer: 'Tinh bột' },
    { question: 'Chất nào được dùng để điều chế methyl amine, methyl chloride?', answer: 'Methanol' },
    { question: 'Cho các hợp chất sau:(a) HOCH2-CH2OH. (b) HOCH2-CH2-CH2OH. (c) HOCH2-CH(OH)-CH2OH. (d) CH3-CH(OH)-CH2OH. (e) CH3-CH2OH. (f) CH3-O-CH2CH3 Các chất đều tác dụng được với Na, Cu(OH)2:', answer: '(a), (c), (d)' },
    { question: 'Khi đun nóng 2 trong số 3 alcohol CH4O, C2H6O, C4H10O với xúc tác, nhiệt độ thích hợp chỉ thu được 2 olefin thì 2 alcohol đó là', answer: 'CH3CH2OH và CH3CH2CH2CH2OH' },
    { question: 'Hợp chất hữu cơ X có công thức phân tử là C5H12O, khi tách nước tạo hỗn hợp 3 alkene đồng phân (kể cả đồng phân hình học). X có cấu tạo thu gọn là', answer: 'CH3CH2CH2CH(OH)CH3' },
    { question: 'Alcohol nào bị oxi hóa tạo ketone?', answer: 'Propan-2-ol' },
    { question: 'Cho 3 ống nghiệm chứa các dung dịch sau: vinyl alcohol, ethyl alcohol, ethylene glycol. Dùng những hóa chất nào để phân biệt 3 ống nghiệm trên?', answer: 'KMnO4, Cu(OH)2.' },
    { question: 'X là hỗn hợp gồm hai alkene (ở thể khí trong điều kiện thường). Hydrate hóa X được hỗn hợp Y gồm 4 alcohol (không có alcohol bậc III). X gồm:', answer: 'Propene và but-1-ene.' },
    { question: 'Dãy các chất đều tác dụng với ethanol là:', answer: 'Na, CuO.' },
    { question: 'Các chất tách nước tạo 1 anken duy nhất:', answer: 'Propan-1-ol; 2-methylpropan-1-ol; propan-2-ol.' },
    { question: 'Xăng E5 bán ngoài thị trường là xăng có 5% alcohol nào theo thể tích?', answer: 'Ethanol' },
    { question: 'Các alcohol có nhiệt độ sôi cao hơn các hydrocarbon hoặc dẫn xuất halogen có phân tử khối tương đương là do:', answer: 'Alcohol có liên kết hydrogen liên phân tử.' },
    { question: 'Oxi hóa alcohol nào sau đây không tạo aldehyde?', answer: 'CH3CH(OH)CH3' },
    { question: 'Sản phẩm chính thu được khi tách nước từ 3-methylbutan-2-ol là:', answer: '3-methylbut-2-ene' },
    { question: 'Trong công nghiệp, glycerol được sản xuất theo sơ đồ nào sau đây?', answer: 'Propene --> 3-chloroprop-1-ene --> 1,3-dichloropropan-2-ol --> glycerol' },
    { question: 'Phenol là những hợp chất hữu cơ:', answer: 'Có một hay nhiều nhóm hydroxy liên kết trực tiếp với nguyên tử carbon của vòng benzene.' },
    { question: 'Phenol đơn giản nhất là hợp chất có:', answer: '1 nhóm hydroxy gắn vào vòng benzene không có nhóm thế.' },
    { question: 'Công thức cấu tạo thu gọn của phenol là:', answer: 'C6H5OH' },
    { question: 'Những chất nào sau đây thuôc loại monophenol?', answer: 'Phenol, o-cresol.' },
    { question: 'Những chất nào sau đây thuôc loại polyphenol?', answer: 'Resorcinol, catechol.' },
    { question: 'Chọn phát biểu sai về tính chất vật lí của phenol:', answer: 'Nhiệt độ sôi thấp hơn các aryl halide có phân tử khối tương đương.' },
    { question: 'Phenol có nhiệt độ nóng chảy cao hơn các aryl halide có phân tử khối tương đương là do:', answer: 'Tạo được liên kết hydrogen giữa các phân tử.' },
    { question: 'Phenol tan vô hạn trong nước ở:', answer: '66°C' },
    { question: 'Khi để lâu trong không khí, phenol sẽ chuyển sang màu gì?', answer: 'Màu hồng.' },
    { question: 'Khi để lâu trong không khí, phenol bị chuyển sang màu hồng do?', answer: 'Bị oxi hóa bởi oxygen trong không khí.' },
    { question: 'Phải rất cẩn thận khi làm các thí nghiệm với phenol do:', answer: 'Phenol rất độc và gây bỏng khi tiếp xúc với da' },
    { question: 'Do nhóm -OH liên kết trực tiếp với vòng benzene dẫn đến:', answer: 'Tăng sự phân cực của liên kết O-H' },
    { question: 'Benzene-1,3-diol còn có tên gọi khác là:', answer: 'Resorcinol' },
    { question: 'Phenol thể hiện tính:', answer: 'Acid yếu.' },
    { question: 'Một trong những hợp chất có tính acid mạnh nhất của phenol là:', answer: 'Picric acid' },
    { question: 'Chọn phát biểu sai về picric acid:', answer: 'Có công thức hóa học C6H3(NO2)2OH' },
    { question: 'Nhỏ nước bromine vào dung dịch phenol sẽ có hiện tượng gì?', answer: 'Xuất hiện kết tủa trắng.' },
    { question: 'Phenol phản ứng với nước bromine tạo ra sản phẩm:', answer: '2,4,6-tribromophenol.' },
    { question: 'Nguyên liệu chính để sản xuất bisphenol A là:', answer: 'Phenol' },
    { question: 'Trong công nghiệp, phenol được sản xuất từ:', answer: 'Cumene' },
    { question: 'Thuốc xịt chloraseptic chứa bao nhiêu phenol?', answer: '0.014' },
    { question: 'Phenol không phản ứng với chất nào sau đây?', answer: 'NaHCO3' },
    { question: 'Hợp chất hữu cơ X chứa vòng benzene, có công thức phân tử C7H8O, phản ứng được với dung dịch NaOH. Số chất thỏa mãn tính chất trên là:', answer: '3' },
    { question: 'Hợp chất hữu cơ X (phân tử chứa vòng benzene) có công thức phân tử là C7H8O2. Khi X tác dụng với Na dư, số mol H2 thu được bằng số mol X tham gia phản ứng. Mặt khác, X tác dụng được với dung dịch NaOH theo tỉ lệ số mol 1: 1. Công thức cấu tạo thu gọn của X là:', answer: 'HOC6H4CH2OH' },
    { question: 'Cho hỗn hợp X gồm ethanol và phenol tác dụng với Na (dư) thu được 3,36 lít khí hydrogen (đktc). Nếu hỗn hợp X trên tác dụng với nước bromine vừa đủ, thu được 19,86 gam kết tủa trắng 2,4,6-tribromophenol. Thành phần phần trăm theo khối lượng của phenol trong hỗn hợp là: (biết H=1, O=16, Br=80, C=12)', answer: '0.338' },
    { question: 'Ứng dụng nào sau đây không phải của phenol', answer: 'Bia, rượu' },
    { question: 'Để nhận biết ba lọ mất nhãn: phenol, styrene, benzyl alcohol, người ta dùng một thuốc thử duy nhất là:', answer: 'Nước bromine.' },
    { question: 'Hóa chất nào dưới đây dùng để phân biệt 2 lọ mất nhãn chứa dung dịch phenol và benzene.1)Na 2) Dung dịch NaOH 3) Nước bromine', answer: '1, 2 và 3' },
    { question: 'Ảnh hưởng của nhóm -OH đến gốc C6H5- thể hiện qua phản ứng giữa phenol với :', answer: 'Nước bromine' },
    { question: 'Một hợp chất X chứa ba nguyên tố C, H, O có tỉ lệ khối lượng mC: mH: mO = 21: 2: 4. Hợp chất X có công thức đơn giản nhất trùng với công thức phân tử. Số đồng phân cấu tạo thuộc loại hợp chất thơm ứng với công thức phân tử của X là:', answer: '5' },
    { question: 'Vòng benzene trở thành nhóm hút eletron là do:', answer: 'Nhóm -OH liên kết trực tiếp vòng benzene.' },
    { question: 'Thuốc xịt chloraseptic chứa 1,4% phenol được dùng làm:', answer: 'Thuốc chữa đau họng' },
    { question: 'Cho 15,5 gam hỗn hợp X và Y liên tiếp nhau trong dãy đồng đẳng của phenol đơn chức tác dụng vừa đủ với 0,5 lít dung dịch NaOH 0,3M. X và Y có công thức phân tử là:', answer: 'C6H5OH, C7H7OH' },
    { question: 'Ảnh hưởng của nhóm -OH đến gốc C6H5- và ảnh hưởng của gốc C6H5- đến nhóm -OH trong phân tử phenol thể hiện qua phản ứng giữa phenol với:', answer: 'Nước Br2, dung dịch NaOH' },
    { question: 'Một dung dịch X chứa 5,4 gam chất đồng đẳng của phenol đơn chức. Cho dung dịch X phản ứng với nước bromine (dư), thu được 17,25 gam hợp chất chứa 3 nguyên tử Br trong phân tử, giả sử phản ứng xảy ra hoàn toàn. Công thức phân tử X là:', answer: 'C7H7OH' },
    { question: 'Cho hỗn hợp gồm 0,2 mol phenol và 0,3 mol ethylene glycol tác dụng với lượng dư potassium thu được V lít H2 ở đktc. Giá trị của V là??', answer: '8.96' },
    { question: 'Phenol thể hiện tính acid qua phản ứng nào?', answer: 'Thế nguyên tử H ở nhóm -OH' },
    { question: 'Cho 15,4 gam hỗn hợp o-cresol và ethanol tác dụng với Na dư thu được m gam muối và 2,24 lít khí H2. Giá trị của m là:', answer: '19.8' },
    { question: 'Hãy chọn phát biểu sai:', answer: 'Phenol có tính acid yếu nhưng mạnh hơn H2CO3.' },
    { question: '0,54 gam 1 đồng đẳng của phenol đơn chức X phản ứng vừa đủ với 10ml NaOH 0,5M. Công thức phân tử của X là:', answer: 'C7H8O' },
    { question: 'Để nhận biết các chất ethanol, propenol, ethylene glycol, phenol có thể dùng các cặp chất:', answer: 'Nước Br2 và Cu(OH)2' },
    { question: 'Cho 0,01 mol phenol tác dụng với lượng dư dung dịch hỗn hợp HNO3 đặc và H2SO4 đặc. Phát biểu nào dưới đây không đúng?', answer: 'Khối lượng picric acid hình thành bằng 6,87 gam.' },
    { question: 'Cho 9,4 gam phenol (C6H5OH) tác dụng hết với bromine dư thì số mol bromine tham gia phản ứng là:', answer: '0,3 mol' },
    { question: 'Từ 1,2 kg cumene có thể điều chế được tối đa bao nhiêu gam phenol? Biết hiệu suất toàn bộ quá trình đạt 80%. (Mcumene = 120)', answer: '752 gam' },
    { question: 'Để điều chế picric acid (2,4,6–trinitrophenol) người ta đi từ 4,7 gam phenol và dùng một lượng HNO3 lớn hơn 50% so với lượng HNO3 cần thiết. Số mol HNO3 đã dùng và khối lượng picric acid thu được lần lượt là (các phản ứng xảy ra hoàn toàn), biết phân tử khối picric acid là 229.', answer: '0,225 mol và 11,45 gam' },
    { question: 'Chất nào sau đây tác dụng với dung dịch NaOH, Na và dung dịch Br2:', answer: 'C6H5OH' },
    { question: 'Để thu 22,9 gam picric acid cần m gam phenol. Tính m, biết hiệu suất phản ứng đạt 94%.', answer: '10 gam' },
    { question: 'Hai loại hợp chất chứa nhóm carbonyl trong phân tử:', answer: 'Aldehyde, ketone.' },
    { question: 'Hợp chất aldehyde hoặc ketone có thể thu được bằng cách:', answer: 'Oxi hóa không hoàn toàn alcohol.' },
    { question: 'Chọn định nghĩa đúng về ketone:', answer: 'Hợp chất hữu cơ có nhóm carbonyl liên kết với hai gốc hydrocarbon.' },
    { question: 'Ketone đơn giản nhất là:', answer: 'Acetone.' },
    { question: 'Công thức chung của dãy đồng đẳng aldehyde no, đơn chức, mạch hở:', answer: 'CnH2n+1CH=O' },
    { question: 'Tên gọi của CH3CH(CH3)CHO là:', answer: '2-methylpropanal' },
    { question: 'Ethanal còn có tên gọi khác là:', answer: 'Acetaldehyde' },
    { question: 'Theo danh pháp thay thế, tên của ketone được hình thành:', answer: 'Tên hydrocarbon (bỏ e) – vị trí nhóm carbonyl - one' },
    { question: 'Tên gọi theo tên gốc – chức của CH3COCH3 là:', answer: 'Dimethyl ketone' },
    { question: 'Chọn phát biểu đúng về tên gọi của C6H5COCH3­:', answer: 'Tên gốc – chức là methyl phenyl ketone.' },
    { question: 'Những aldehyde là chất khí ở nhiệt độ thường:', answer: 'Formic aldehyde, ethanal' },
    { question: 'Chọn phát biểu đúng trong các phát biểu sau:', answer: 'Các hợp chất carbonyl có nhiệt độ sôi cao hơn nhiều so với các hydrocarbon có phân tử khối tương đương.' },
    { question: 'Các hợp chất carbonyl tan tốt trong nước khi trong phân tử có bao nhiêu carbon?', answer: '1 – 3 carbon.' },
    { question: 'Các hợp chất carbonyl mạch ngắn tan tốt trong nước là do:', answer: 'Tạo kiên kết hydrogen với nước.' },
    { question: 'Chọn phát biểu sai về tính chất vật lý của hợp chất carbonyl', answer: 'Số nguyên tử carbon trong gốc hydrocarbon tăng thì khả năng tan tăng.' },
    { question: 'Nhóm carbonyl có một số tính chất hóa học giống với:', answer: 'Alkene' },
    { question: 'Khử ketone bằng NaBH4 thu được:', answer: 'Alcohol bậc 2' },
    { question: 'Sản phẩm thu được khi nhỏ nước bromine vào dung dịch ethanal là:', answer: 'Acetic acid' },
    { question: 'Phản ứng tráng bạc là tên gọi của phản ứng:', answer: 'Aldehyde với thuốc thử Tollens' },
    { question: 'Để phân biệt aldehyde với ketone có thể sử dụng những chất nào?', answer: 'Thuốc thử Tollens, Cu(OH)­2/OH-' },
    { question: 'Phản ứng với iodine trong môi trường kiềm dùng để nhận biết các hợp chất có chứa nhóm:', answer: 'CH3CO-' },
    { question: 'Chọn phát biểu đúng:', answer: 'Acetone được dùng để tổng hợp bisphenol-A.' },
    { question: 'Formalin được dùng để:', answer: 'Ngâm xác động thực vật.' },
    { question: 'Trong công nghiệp, acetaldehyde được điều chế bằng cách:', answer: 'Oxi hóa ethylene' },
    { question: 'Trong công nghiệp, acetone được điều chế bằng cách:', answer: 'Oxi hóa cumene' },
    { question: 'Điểm chung của 2 hợp chất aldehyde và ketone là:', answer: 'Đều chứa nhóm carbonyl' },
    { question: 'Các hợp chất cyanohydrin bị thủy phân trong môi trường acid, tạo ra:', answer: 'Hydroxy acid' },
    { question: 'Cho 0,1 mol aldehyde X tác dụng với lượng vừa đủ AgNO3 trong dung dịch NH3, đun nóng thu được 43,2 gam Ag. Hydrogen hóa X thu được Y, biết 0,1 mol Y phản ứng vừa đủ với 4,6 gam Na. Công thức cấu tạo thu gọn của X là', answer: 'OHC-CHO' },
    { question: 'Hai hợp chất hữu cơ X và Y là đồng đẳng kế tiếp, đều tác dụng với Na và có phản ứng tráng bạc. Biết phần trăm khối lượng oxygen trong X, Y lần lượt là 53,33% và 43,24%. Công thức cấu tạo của X và Y tương ứng là', answer: 'HO-CH2-CHO và HO-CH2-CH2-CHO.' },
    { question: 'Số đồng phân aldehyde của C5H10O là:', answer: '4' },
    { question: 'Acetaldehyde không tác dụng được với:', answer: 'Na' },
    { question: 'Ứng dụng nào sau đây không phải của formaldehyde:', answer: 'Thuốc an thần solfonal' },
    { question: 'Thuốc thử Tollens là:', answer: 'Dung dịch AgNO3 trong NH3 dư' },
    { question: 'Hydrogen hóa hoàn toàn m gam hỗn hợp X gồm hai aldehyde no, đơn chức, mạch hở, kế tiếp nhau trong dãy đồng đẳng thu được (m + 1) gam hỗn hợp hai alcohol. Mặt khác, khi đốt cháy hoàn toàn cũng m gam X thì cần vừa đủ 17,92 lít khí O2 (đktc). Giá trị của m là', answer: '17.8' },
    { question: 'Nhóm carbonyl có một số tính chất hóa học giống alkene là do:', answer: 'Nguyên tử carbon liên kết nguyên tử oxygen bằng 1 liên kết σ và 1 liên kết π' },
    { question: 'Khối lượng Ag thu được khi cho 0,1 mol CH3CHO phản ứng hoàn toàn với lượng dư dung dịch AgNO3 trong NH3, đun nóng là:', answer: '21,6 gam' },
    { question: 'Hydrogen cyanide phản ứng với aldehyde hoặc ketone tạo ra sản phẩm:', answer: 'Cyanohydrin' },
    { question: 'Formalin là:', answer: 'Dung dịch khoảng 40% formic aldehyde trong nước.' },
    { question: 'Từ aldehyde, ketone muốn chuyển hóa thành alcohol có thể dùng:', answer: 'Phản ứng khử aldehyde, ketone bằng LiAlH4, NaBH4' },
    { question: 'Sự biến đổi nhiệt độ sôi của các chất theo dãy: HCHO, CH3OH, C2H5OH là:', answer: 'Tăng.' },
    { question: 'Công thức phân tử nào sau đây không thể là aldehyde?', answer: 'C2H6O2' },
    { question: '2-methylpropanal là tên thay thế của chất có công thức cấu tạo thu gọn là:', answer: '(CH3)2CHCHO' },
    { question: 'Chọn phát biểu sai về menthone:', answer: 'Công thức phân tử là C9H16O' },
    { question: 'CH3CHO khi phản ứng với dung dịch AgNO3/NH3 thu được muối B là:', answer: 'CH3COONH4' },
    { question: 'Aldehyde tác dụng với Cu(OH)2 trong môi trường kiềm (toC) thu kết tủa màu đỏ gạch là:', answer: 'Cu2O' },
    { question: 'Dimethyl ketone phản ứng với iodine trong môi trường kiềm tạo ra:', answer: 'Triiodomethane' },
    { question: 'Phát biểu nào sau đây không đúng?', answer: 'Benzaldehyde cho mùi thơm nhẹ của tinh dầu xả.' },
    { question: 'Phát biểu nào sau đây không đúng?', answer: 'Trong phân tử aldehyde, các nguyên tử liên kết với nhau chỉ bằng liên kết σ' },
    { question: 'Carboxylic acid là những hợp chất hữu cơ:', answer: 'Trong phân tử chứa nhóm carboxyl liên kết trực tiếp nguyên tử carbon hoặc hydrogen.' },
    { question: 'Vì sao gọi acetic acid là acid giấm?', answer: 'Acetic acid có trong thành phần của giấm ăn.' },
    { question: 'Phân tử chỉ bao gồm hai nhóm -COOH liên kết với nhau được gọi là:', answer: 'Oxalic acid' },
    { question: 'Tên thay thế của công thức HOOC-COOH là:', answer: 'Ethanedioic acid.' },
    { question: 'Tartaric acid tạo nên vị chua của:', answer: 'Nho' },
    { question: 'Công thức chung của carboxylic acid no, đơn chức, mạch hở:', answer: 'CnH2n+1COOH' },
    { question: 'Chọn phát biểu sai về tính chất vật lí:', answer: 'Liên kết hydrogen giữa các phân tử carboxylic acid chỉ tồn tại dạng polymer.' },
    { question: 'Nhiệt độ sôi của các carboxylic acid cao hơn các alcohol cùng số nguyên tử carbon là do:', answer: 'Liên kết O-H trong nhóm carboxyl phân cực hơn liên kết O-H trong alcohol.' },
    { question: 'Carboxylic acid nào sau đây không tan vô hạn trong nước?', answer: 'Pentanoic acid' },
    { question: 'Phát biểu nào sau đây sai:', answer: 'Carboxylic acid có từ 5 carbon trở xuống thì tan vô hạn trong nước.' },
    { question: 'Carboxylic acid nào tạo nên vị chua của chanh?', answer: 'Citric acid' },
    { question: 'Số đồng phân acid ứng với công thức C4H8O2:', answer: '2' },
    { question: 'Phản ứng ester hóa là:', answer: 'Phản ứng giữa alcohol và carboxylic acid.' },
    { question: 'Tính chất của ester:', answer: 'Ít tan trong nước, nhẹ hơn nước.' },
    { question: 'Chất được dùng để sản xuất thủy tinh hữu cơ là:', answer: 'Acrylic acid' },
    { question: 'Ứng dụng nào sau đây là của acetic acid?', answer: 'Tổng hợp aluminium monoacetate làm chất cầm màu.' },
    { question: 'Phát biểu nào sau đây sai:', answer: 'Benzoic acid với liều lượng lớn dùng làm chất bảo quản thực phẩm.' },
    { question: 'Phương pháp lên men dùng để điều chế:', answer: 'Acetic acid' },
    { question: 'Chọn ý sai: Nhược điểm của phương pháp lên men là:', answer: 'Có mùi thơm đặc trưng.' },
    { question: 'Phương pháp lên men là quá trình:', answer: 'Oxi hóa dung dịch ethyl alcohol loãng bằng oxygen không khí ở điều kiện thường, dưới tác dụng men giấm.' },
    { question: 'Trong công nghiệp, carboxylic acid được sản xuất bằng phương pháp:', answer: 'Oxi hóa alkane.' },
    { question: 'Acetic acid không phản ứng với:', answer: 'Cu' },
    { question: 'Dãy số gồm các chất có nhiệt độ sôi tăng dần từ trái qua phải là:', answer: 'C2H6, CH3CHO, C2H5OH, CH3COOH.' },
    { question: 'Oxalic acid có tính acid như thế nào so với acetic acid?', answer: 'Mạnh gấp 104 lần' },
    { question: 'Cho sơ đồ phản ứng: C2H2 --> X --> CH3COOH. Trong sơ đồ trên, mỗi mũi tên là một phản ứng. X là chất nào sau đây?', answer: 'CH3CHO' },
    { question: 'Dùng chất gì để tẩy cặn trong ấm đun siêu tốc?', answer: 'Dung dịch acetic acid 2 – 5%' },
    { question: 'Biện pháp nào dưới đây không làm tăng hiệu suất quá trình tổng hợp ethyl acetate từ phản ứng giữa ethyl alcohol và acetic acid.', answer: 'Lấy số mol alcohol và acetic acid bằng nhau' },
    { question: 'Các sản phẩm thu được khi đốt cháy hoàn toàn 3 gam acid hữu cơ X được dẫn lần lượt qua bình 1 đựng H2SO4 đặc và bình 2 đựng dung dịch NaOH. Sau thí nghiệm thấy khối lượng bình 1 tăng 1,8 gam và khối lượng bình 2 tăng 4,4 gam. Công thức cấu tạo của X là', answer: 'CH3COOH' }, // Corrected typo COỌH -> COOH
    { question: 'Đốt cháy 14,6 gam một acid no đa chức Y ta thu được 0,6 mol CO2 và 0,5 mol H2O. Biết mạch carbon là mạch thẳng. Cho biết công thức cấu tạo của Y', answer: 'HOOC-(CH2)4-COOH' },
    { question: 'Tên thông thường của carboxylic acid liên quan đến:', answer: 'Nguồn gốc tìm ra chúng' },
    { question: 'Trung hòa 400 ml dung dịch acetic acid 0,5M bằng dung dịch NaOH 0,5M. Thể tích dung dịch NaOH cần dùng là:', answer: '400 ml' },
    { question: 'Hỗn hợp X gồm HCOOH và CH3COOH (tỉ lệ mol 1:1). Lấy 5,3 gam hỗn hợp X tác dụng với 5,75 gam C2H5OH (có xúc tác H2SO4 đặc) thu được m gam hỗn hợp ester (hiệu suất của các phản ứng ester hoá đều bằng 80%). Giá trị của m là:', answer: '6.48' },
    { question: 'Để trung hòa a mol carboxylic acid A cần 2a mol NaOH. Đốt cháy hoàn toàn a mol A thu được 3a mol CO2. A có công thức phân tử là', answer: 'C3H4O4' },
    { question: 'Phản ứng nào của carboxylic acid giải phóng khí hydrogen?', answer: 'Phản ứng với kim loại' },
    { question: 'Giấm ăn là dung dịch acetic acid có nồng độ:', answer: '2 – 5%' },
    { question: 'Đun nóng 24 gam acetic acid với lượng dư ethyl alcohol (xúc tác H2SO4 đặc), thu được 26,4 gam ester. Hiệu suất của phản ứng ester hóa là:', answer: '0.75' },
    { question: 'Liên kết hydrogen giữa các phân tử carboxylic acid có bao nhiêu dạng tồn tại?', answer: '2' },
    { question: 'Dãy gồm các chất có thể điều chế trực tiếp acetic acid là:', answer: 'CH3OH, C2H5OH, CH3CHO.' },
    { question: 'Các hợp chất: CH3COOH, C2H5OH và C6H5OH xếp theo thứ tự tăng dần tính acid là:', answer: 'C2H5OH < C6H5OH < CH3COOH' },
    { question: 'Chất nào được dùng chất bảo quản thực phẩm cho nước sốt cà chua, bơ thực vật,…?', answer: 'Benzoic acid' },
    { question: 'Tính acid trong dãy sau thay đổi như thế nào: HCOOH, CH3COOH, C2H5COOH.', answer: 'Giảm' },
    { question: 'Cho 13,4 gam hỗn hợp X gồm hai acid no, đơn chức, mạch hở, kế tiếp nhau trong cùng dãy đồng đẳng tác dụng với Na dư, thu được 17,8 gam muối. Khối lượng của acid có số nguyên tử carbon ít hơn có trong X là:', answer: '6,0 gam' },
    { question: 'Chọn phát biểu sai về phản ứng ester hóa:', answer: 'Hiệu suất phản ứng thường cao' },
    { question: 'Trong nhóm carboxyl, mật độ electron tại nhóm OH chuyển dịch về nhóm C=O nên:', answer: 'Nguyên tử H trong nhóm OH linh động hơn và mang một phần điện tích dương.' },
    { question: 'Hiện nay, một lượng lớn acetic acid trong công nghiệp được sản xuất bằng cách:', answer: 'Carbonyl hóa methanol' },
    { question: 'Cho 150 gam acetic acid tác dụng với 161 gam ethyl alcohol có H2SO4 đặc làm xúc tác. Khi phản ứng xảy ra xong thì có 60% lượng acid chuyển thành ester. Khối lượng ester thu được sau khi phản ứng kết thúc là:', answer: '132 gam' },
    { question: 'Chọn phát biểu đúng:', answer: 'Oxalic acid tạo nên vị chua của me.' }
];
// ** NEW QA DATA END **


console.log("Bắt đầu script.");
console.log("Dữ liệu qaData:", qaData); // Will now log the new data

function renderQAItems(data) {
    console.log("Hàm renderQAItems được gọi với:", data);
    qaList.innerHTML = '';
    data.forEach((item, index) => {
        console.log("Đang xử lý mục:", item, "ở index:", index);
        const qaItem = document.createElement('div');
        qaItem.classList.add('qa-item');
        qaItem.dataset.question = item.question.toLowerCase(); // Store lowercase for case-insensitive search
        qaItem.dataset.originalQuestion = item.question;     // Store original question for display reset
        qaItem.dataset.index = index; // Store original index
        qaItem.dataset.answer = item.answer; // Store original answer for reset and search

        const hideButton = document.createElement('button');
        hideButton.classList.add('hide-button');
        hideButton.innerHTML = '<i class="fa fa-eye"></i>'; // Assuming Font Awesome is used
        hideButton.setAttribute('aria-label', `Ẩn câu hỏi ${index + 1}`); // For accessibility
        hideButton.addEventListener('click', () => hideQAItem(index));

        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.textContent = item.question; // Use original question text

        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        answerDiv.textContent = item.answer; // Use original answer text

        qaItem.appendChild(hideButton);
        qaItem.appendChild(questionDiv);
        qaItem.appendChild(answerDiv);
        qaList.appendChild(qaItem);
        console.log("Đã thêm thẻ vào qaList:", qaItem);
    });
    updateHiddenCount();
    updateShowHiddenButtonVisibility();
    totalCountSpan.textContent = data.length; // Cập nhật tổng số lượng
    console.log("Số lượng thẻ sau khi render:", qaList.querySelectorAll('.qa-item').length);
    // console.log("Nội dung qaList sau render:", qaList.innerHTML); // Can be verbose
}

function hideQAItem(index) {
    console.log("Hàm hideQAItem được gọi với index:", index);
    const qaItem = document.querySelector(`.qa-item[data-index="${index}"]`);
    if (qaItem) {
        const hideButton = qaItem.querySelector('.hide-button');
        if (!qaItem.classList.contains('hidden')) {
            qaItem.classList.add('hidden');
            hiddenItems.push(parseInt(qaItem.dataset.index));
            hideButton.innerHTML = '<i class="fa fa-eye-slash"></i>'; // Change icon to slashed eye
            hideButton.setAttribute('aria-label', `Hiện câu hỏi ${index + 1}`);
            console.log("Đã ẩn thẻ index:", index);
        } else {
            qaItem.classList.remove('hidden');
            hiddenItems = hiddenItems.filter(itemIndex => itemIndex !== parseInt(qaItem.dataset.index));
             hideButton.innerHTML = '<i class="fa fa-eye"></i>'; // Change icon back to eye
            hideButton.setAttribute('aria-label', `Ẩn câu hỏi ${index + 1}`);
            console.log("Đã hiện thẻ index:", index);
        }
        updateHiddenCount();
        updateShowHiddenButtonVisibility();
    } else {
        console.warn("Không tìm thấy thẻ với index:", index);
    }
}

function updateHiddenCount() {
    const count = hiddenItems.length;
    hiddenCountSpan.textContent = count;
    console.log("Số lượng thẻ ẩn:", count);
}

function updateShowHiddenButtonVisibility() {
    if (hiddenItems.length > 0) {
        showHiddenBtn.style.display = 'block'; // Or 'inline-block' depending on layout
        console.log("Hiển thị nút 'Hiện thẻ ẩn'.");
    } else {
        showHiddenBtn.style.display = 'none';
        console.log("Ẩn nút 'Hiện thẻ ẩn'.");
    }
}

showHiddenBtn.addEventListener('click', () => {
    console.log("Nút 'Hiện thẻ ẩn' được click.");
    // Iterate through the stored hidden indices
    // Use [...hiddenItems] to iterate over a copy in case hideQAItem modifies it (though it shouldn't here)
    [...hiddenItems].forEach(index => {
         const qaItem = document.querySelector(`.qa-item[data-index="${index}"]`);
         if(qaItem && qaItem.classList.contains('hidden')) { // Double check it's still hidden
            // Instead of calling hideQAItem, directly manage state here
            qaItem.classList.remove('hidden');
            const hideButton = qaItem.querySelector('.hide-button');
            hideButton.innerHTML = '<i class="fa fa-eye"></i>';
            hideButton.setAttribute('aria-label', `Ẩn câu hỏi ${index + 1}`);
            console.log("Đã hiện thẻ index:", index);
         }
    });
    // Clear the hidden items state *after* iteration
    hiddenItems = [];
    updateHiddenCount();
    updateShowHiddenButtonVisibility();
    // Re-apply filter to make sure visibility matches search term
    filterQAItems();
});

function filterQAItems() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    console.log("Hàm filterQAItems được gọi với searchTerm:", searchTerm);
    const allQaItems = document.querySelectorAll('.qa-item');

    allQaItems.forEach(item => {
        const questionSearchText = item.dataset.question; // Lowercase question for search
        const originalQuestionText = item.dataset.originalQuestion; // Original case question
        const originalAnswerText = item.dataset.answer; // Original case answer
        const questionElement = item.querySelector('.question');
        const answerElement = item.querySelector('.answer');

        const isUserHidden = item.classList.contains('hidden'); // Check if user explicitly hid it

        // Determine if item should be visible based on search term
        const matchesSearch = searchTerm === '' ||
                               questionSearchText.includes(searchTerm) ||
                               originalAnswerText.toLowerCase().includes(searchTerm);

        // Reset highlights first - Use original text from dataset
        questionElement.textContent = originalQuestionText;
        answerElement.textContent = originalAnswerText;

        if (!isUserHidden && matchesSearch) {
            item.style.display = 'block'; // Show item

            if (searchTerm !== '') {
                // Highlight question
                const highlightRegex = new RegExp(searchTerm.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
                const highlightedQuestion = originalQuestionText.replace(highlightRegex, match => `<span class="highlight">${match}</span>`);
                questionElement.innerHTML = highlightedQuestion;

                // Highlight answer
                const highlightedAnswer = originalAnswerText.replace(highlightRegex, match => `<span class="highlight">${match}</span>`);
                answerElement.innerHTML = highlightedAnswer;
            }
        } else {
            item.style.display = 'none'; // Hide item if user-hidden or doesn't match search
        }
    });
}


searchInput.addEventListener('input', filterQAItems);

// Initial Setup
console.log("Gọi hàm renderQAItems ban đầu.");
if (document.readyState === 'loading') {
    // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', () => renderQAItems(qaData));
} else {
    // `DOMContentLoaded` has already fired
    renderQAItems(qaData);
}

console.log("Giá trị ban đầu của totalCountSpan:", totalCountSpan.textContent);
console.log("Giá trị ban đầu của hiddenCountSpan:", hiddenCountSpan.textContent);
console.log("Kết thúc script.");
