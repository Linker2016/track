/*
 * 按钮组可选名称{'关闭','取消','删除','保存','确定'}
 * Confirm.show('提示',	--->弹出框标题
				'success',	--->弹出框类型 warning success confirm
				'您已成功收藏该商品！<a href="myfavorite.jsp">查看我的收藏</a>', --->弹出框内容
				{	--->弹出框按钮组及点击之后的CallBack
					'关闭': {
								'primary': true,
								'callback': function() {
									Confirm.hide();
								}
							}
				});
 */
var Confirm = {
	modalContainerId: '#modal-container',
	modalBackgroundId: '#modal-background',
	modalMainId: '#confirm-modal',
	customButton: {
		'关闭': {
			'primary': true,
			'callback': function() {
				Confirm.hide();
			}
		}
	},
	customEvent: null,

	init: function(size) {
		var self = this;
		var ElemHtml = '';

		$(self.modalMainId).remove();

		ElemHtml = '<div style="display:none;" id="confirm-modal" class="modal fade role="dialog" tabindex="-1">' +
		'<div class="modal-dialog modal-' + size + '">' +
		'<div class="modal-content modal-content-custmor modal-content-' + size + '">' +
		'<div class="modal-header modal-header-custmor modal-header-' + size + '">' +
		'<button id="modal-upper-close" class="close modal-close hidden" aria-label="Close" type="button">' +
		'<span aria-hidden="true">×</span>' +
		'</button>' +
		'<span id="modal-title" class="modal-title">Modal Title</span>' +
		'</div>' +
		'<div id="modal-body" class="modal-body modal-body-' + size + '"> <span id="modal-img"></span> <span id="modal-message"></span> </div>' +
		'<div id="modal-footer" class="modal-footer modal-footer-custmor modal-footer-' + size + '">'+
		'</div>'+
		'</div>' +
		'</div>' +
		'</div>' +
		'<div id="modal-background" class=""></div>';

		$('body').append(ElemHtml);
	},

	addCustomButtons: function() {
		var self = this;
		var condition = true;

		$('.modal-custom-button').remove();

		closeButton = '';

		if(!self.customButton){
			self.customButton = {
				'关闭': {
					'primary': true,
					'callback': function() {
						Confirm.hide();
					}
				}
			};
		}

		$.each(self.customButton, function(key, val) {
			buttonName = key.replace(/ /g, '');

			var ElemHtml = '';
			var ButtonState = 'btn-default';

			if(val['primary'])
				ButtonState = 'btn-primary';
				
			if(buttonName == "关闭"){
				ElemHtml = '<button id="modal-cancel" type="button" class="btn btn-default mid wider grey">关闭</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-cancel", val['callback']);
			}else if(buttonName == "取消"){
				ElemHtml = '<button id="modal-cancel" type="button" class="btn btn-default mid wider grey">取消</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-cancel", val['callback']);
			}else if(buttonName == "删除"){
				ElemHtml = '<button id="modal-delete" type="button" class="btn btn-default mid wider highlight">删除</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-delete", val['callback']);
			}else if(buttonName == "保存"){
				ElemHtml = '<button id="modal-save" type="button" class="btn btn-default mid wider highlight">保存</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-save", val['callback']);
			}else if(buttonName == "确定"){
				ElemHtml = '<button id="modal-confirm" type="button" class="btn btn-default mid wider highlight">确定</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-confirm", val['callback']);
			}else if(buttonName == "暂不取消"){
				ElemHtml = '<button id="modal-cancel" type="button" class="btn btn-default mid wider grey">暂不取消</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-cancel", val['callback']);
			}else if(buttonName == "确定取消"){
				ElemHtml = '<button id="modal-confirm" type="button" class="btn btn-default mid wider highlight">确定取消</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-confirm", val['callback']);
			}else if(buttonName == "同意协议"){
				ElemHtml = '<button id="modal-confirm" type="button" class="btn btn-default mid wider highlight">同意协议</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-confirm", val['callback']);
			}else if(buttonName == "下一步"){
				ElemHtml = '<button id="modal-confirm" type="button" class="btn btn-default mid wider highlight">下一步</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-confirm", val['callback']);
			}else if(buttonName == "上传附件"){
				ElemHtml = '<button id="modal-confirm" type="button" class="btn btn-default mid wider highlight">上传附件</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-confirm", val['callback']);
			}else if(buttonName == "确认挂牌"){
				ElemHtml = '<button id="modal-confirm" type="button" class="btn btn-default mid wider highlight">确认挂牌</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-confirm", val['callback']);
			}else if(buttonName == "提交"){
				ElemHtml = '<button id="modal-confirm" type="button" class="btn btn-default mid wider highlight">提交</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-confirm", val['callback']);
			}else if(buttonName == "联系客服"){
				ElemHtml = '<button id="modal-confirm" type="button" class="btn btn-default mid wider highlight">联系客服</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-confirm", val['callback']);
			}else if(buttonName == "查看报告"){
				ElemHtml = '<button id="modal-confirm" type="button" class="btn btn-default mid wider highlight">查看报告</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-confirm", val['callback']);
			}else if(buttonName == "支付遇到问题"){
				ElemHtml = '<button id="modal-cancel" type="button" class="btn btn-default mid wider grey">支付遇到问题</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-cancel", val['callback']);
			}else if(buttonName == "已完成支付"){
				ElemHtml = '<button id="modal-confirm" type="button" class="btn btn-default mid wider highlight">已完成支付</button>';
				$('#modal-footer').append(ElemHtml);
				self.addCustomButtonEvents("modal-confirm", val['callback']);
			}
		});

		$('#modal-upper-close').unbind();
		$('#modal-upper-close').bind('click', function(e) {
			e.preventDefault();
			self.hide();
		});

		$('#modal-close').unbind();
		$('#modal-close').bind('click', function(e) {
			e.preventDefault();
			self.hide();
		});
		
		if(Object.keys(self.customButton).length  == 1){
			if(self.show.arguments[1] == "tel"
				|| self.show.arguments[1] == "email"
					|| self.show.arguments[1] == "password"
						|| self.show.arguments[1] == "article"){
				$("#modal-upper-close").removeClass("hidden");
			}
		}else{
			$("#modal-upper-close").removeClass("hidden");
		}
	},

	addCustomButtonEvents: function(customButtonId, callback) {
		var self = this;

		$('#' + customButtonId).unbind();
		$('#' + customButtonId).bind('click', function(e) {
			e.preventDefault();
			callback();
		});
	},

	show: function(title, type, message, customEvent) {
		var self = this;
		
		if(type == "textarea"){
			Confirm.init("textarea");
			$('#modal-message').html('<textarea type="text" style="width: 100%;height: 100%;resize: none;border-color: #ededed;"></textarea>');
		}else{
			Confirm.init(type);
			
			if(message)
				$('#modal-message').html(message);
		}

		if(title)
			$('#modal-title').html(title);
		
		if(type){
			$('#modal-img').removeClass();
			$('#modal-img').addClass(type);
		}
		
		self.customButton = customEvent;

		$(self.modalMainId).addClass('in');
		$(self.modalBackgroundId).addClass('modal-backdrop in');
		$(self.modalMainId).css({
			'display': 'block',
			'padding-right': '17px'
		});
		self.addCustomButtons();
	},

	hide: function() {
		var self = this;

		$(self.modalMainId).removeClass('in');
		//$(self.modalBackgroundId).removeClass('modal-backdrop in');
		$(self.modalBackgroundId).remove();

		$(self.modalMainId).css('display', 'none');
	}
};

$(document).ready(function() {
	Confirm.init();
}).keyup(function(event){
	 switch(event.keyCode) {
	 case 27:
		 Confirm.hide();
		 break;
	 case 13:{
		 $('#modal-footer .btn.highlight').click();
		 break;
	 }
	 }
});